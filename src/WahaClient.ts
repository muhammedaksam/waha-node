import { ApiConfig } from './generated/http-client'
import { Apps } from './generated/Apps'
import { Auth } from './generated/Auth'
import { Calls } from './generated/Calls'
import { Channels } from './generated/Channels'
import { Chats } from './generated/Chats'
import { Chatting } from './generated/Chatting'
import { Contacts } from './generated/Contacts'
import { Events } from './generated/Events'
import { Groups } from './generated/Groups'
import { Labels } from './generated/Labels'
import { Media } from './generated/Media'
import { Observability } from './generated/Observability'
import { Presence } from './generated/Presence'
import { Profile } from './generated/Profile'
import { Screenshot } from './generated/Screenshot'
import { Sessions } from './generated/Sessions'
import { Status } from './generated/Status'

export class WahaClient {
  public apps: Apps
  public auth: Auth
  public calls: Calls
  public channels: Channels
  public chats: Chats
  public chatting: Chatting
  public contacts: Contacts
  public events: Events
  public groups: Groups
  public labels: Labels
  public media: Media
  public observability: Observability
  public presence: Presence
  public profile: Profile
  public screenshot: Screenshot
  public sessions: Sessions
  public status: Status

  constructor(baseUrl: string, token?: string)
  constructor(config: ApiConfig)
  constructor(configOrUrl: ApiConfig | string, token?: string) {
    let apiConfig: ApiConfig
    if (typeof configOrUrl === 'string') {
      apiConfig = {
        baseURL: configOrUrl,
        securityWorker: token ? () => ({ headers: { 'X-Api-Key': token } }) : undefined,
      }
    } else {
      apiConfig = configOrUrl
    }

    this.apps = new Apps(apiConfig)
    this.auth = new Auth(apiConfig)
    this.calls = new Calls(apiConfig)
    this.channels = new Channels(apiConfig)
    this.chats = new Chats(apiConfig)
    this.chatting = new Chatting(apiConfig)
    this.contacts = new Contacts(apiConfig)
    this.events = new Events(apiConfig)
    this.groups = new Groups(apiConfig)
    this.labels = new Labels(apiConfig)
    this.media = new Media(apiConfig)
    this.observability = new Observability(apiConfig)
    this.presence = new Presence(apiConfig)
    this.profile = new Profile(apiConfig)
    this.screenshot = new Screenshot(apiConfig)
    this.sessions = new Sessions(apiConfig)
    this.status = new Status(apiConfig)
  }
}
