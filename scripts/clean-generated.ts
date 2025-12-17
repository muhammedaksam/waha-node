import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const generatedDir = path.resolve(__dirname, '../src/generated')

// Replace everything that is NOT alphanumeric, dot, or dash with empty string
// This strips emojis, spaces, special chars
const cleanName = (name: string) => name.replace(/[^a-zA-Z0-9.-]/g, '')

// Files to skip
const skipFiles = ['http-client.ts', 'data-contracts.ts']

async function clean() {
  const files = fs.readdirSync(generatedDir)

  for (const file of files) {
    if (skipFiles.includes(file)) continue

    const oldPath = path.join(generatedDir, file)

    // Clean filename
    let newName = cleanName(file)

    // If name starts with dot or dash (e.g. from just removing emoji at start), traverse
    while (newName.startsWith('.') || newName.startsWith('-')) {
      newName = newName.substring(1)
    }

    if (newName === file) continue

    const newPath = path.join(generatedDir, newName)

    // Read content
    let content = fs.readFileSync(oldPath, 'utf8')

    // Replace class name inside content
    // Original: export class 🔑Auth
    // target: export class Auth
    // We regex match the export class definition
    const classNameMatch = content.match(/export class ([^\s<{]+)/) // match class name before < or {
    if (classNameMatch) {
      const oldClassName = classNameMatch[1]
      const newClassName = cleanName(oldClassName).replace(/^[-.]/, '') // clean class name too

      // Replace ALL occurrences of the old class name in the file
      // Be careful not to replace partial matches if possible, but for generated classes it's usually safe
      // Using split/join for global replace safely
      content = content.split(oldClassName).join(newClassName)
    }

    // Write new file
    fs.writeFileSync(newPath, content)

    // Delete old file
    fs.unlinkSync(oldPath)

    console.log(`Renamed ${file} -> ${newName} and cleaned class name.`)
  }

  // Now regenerate index.ts export list dynamically because filenames changed
  const newFiles = fs.readdirSync(generatedDir)
  const exports = [
    '// Export the auto-generated API clients and all types',
    "export * from './generated/data-contracts';",
    "export { HttpClient } from './generated/http-client';",
    "export { WahaClient } from './WahaClient';",
    '',
  ]

  const classNames: string[] = []

  for (const file of newFiles) {
    if (skipFiles.includes(file)) continue
    const name = path.basename(file, '.ts')
    // Export class as Named export
    // The class name inside is likely the same as the filename now (e.g. Auth)
    exports.push(`export { ${name} } from './generated/${name}';`)
    classNames.push(name)
  }

  const indexContent = exports.join('\n')
  fs.writeFileSync(path.resolve(__dirname, '../src/index.ts'), indexContent)
  console.log('Updated src/index.ts with new exports.')

  // Generate WahaClient aggregator
  const clientImports = classNames
    .map((name) => `import { ${name} } from './generated/${name}';`)
    .join('\n')
  const clientProperties = classNames
    .map((name) => `  public ${name.toLowerCase()}: ${name};`)
    .join('\n')
  const clientInits = classNames
    .map((name) => `    this.${name.toLowerCase()} = new ${name}(apiConfig);`)
    .join('\n')

  const clientContent = `
import { ApiConfig } from './generated/http-client';
${clientImports}

export class WahaClient {
  ${clientProperties}

  constructor(baseUrl: string, token?: string);
  constructor(config: ApiConfig);
  constructor(configOrUrl: ApiConfig | string, token?: string) {
    let apiConfig: ApiConfig;
    if (typeof configOrUrl === 'string') {
        apiConfig = {
            baseURL: configOrUrl,
            securityWorker: token ? () => ({ headers: { 'X-Api-Key': token } }) : undefined,
        };
    } else {
        apiConfig = configOrUrl;
    }

    ${clientInits}
  }
}
`
  fs.writeFileSync(path.resolve(__dirname, '../src/WahaClient.ts'), clientContent)
  console.log('Generated src/WahaClient.ts aggregator.')
}

clean()
