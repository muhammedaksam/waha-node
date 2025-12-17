import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json' // Added json import

const production = !process.env.ROLLUP_WATCH

export default [
  // ESM and CJS builds
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ preferBuiltins: true }), // Modified resolve plugin
      commonjs(),
      json(), // Added json plugin
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
      }),
      production && terser(),
    ],
    external: ['axios'], // Added axios to external
  },
  // Type declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
    external: ['axios'], // Added axios to external
  },
]
