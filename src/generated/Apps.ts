/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpClient, RequestParams, ContentType, HttpResponse } from './http-client'
import {
  Base64File,
  QRCodeValue,
  RequestCodeRequest,
  PasskeyAllowedCredential,
  PasskeyChallenge,
  PasskeyAssertionResponseData,
  PasskeyAssertionRequest,
  PasskeyConfirmationResponse,
  SessionActionsDTO,
  ApiKeyRequest,
  ApiKeyDTO,
  ScopedApiKeyRequest,
  PhoneNumbersCacheConfig,
  ArgentinePhoneNumbersAppConfig,
  BrazilianPhoneNumbersAppConfig,
  PhoneNumbersRuleConfig,
  PhoneNumbersAppConfig,
  CallsAppChannelConfig,
  CallsAppConfig,
  ChatWootCommandsConfig,
  ChatWootConversationsConfig,
  ChatWootAppConfig,
  McpAppConfig,
  MexicanPhoneNumbersAppConfig,
  App,
  ReachoutTimelockData,
  MessageCappingData,
  MeInfo,
  ProxyConfig,
  IgnoreConfig,
  ClientSessionConfig,
  NowebStoreConfig,
  NowebConfig,
  GowsStorageConfig,
  GowsConfig,
  WebjsConfig,
  HmacConfiguration,
  RetriesConfiguration,
  CustomHeader,
  WebhookConfig,
  SessionConfig,
  SessionInfo,
  SessionCreateRequest,
  SessionDTO,
  SessionUpdateRequest,
  SessionLogoutAppsOptions,
  SessionLogoutRequest,
  SessionStartDeprecatedRequest,
  SessionStopDeprecatedRequest,
  SessionLogoutDeprecatedRequest,
  MyProfile,
  ProfileNameRequest,
  Result,
  ProfileStatusRequest,
  RemoteFile,
  BinaryFile,
  ProfilePictureRequest,
  MessageTextRequest,
  S3MediaData,
  WAMedia,
  WALocation,
  ReplyToMessage,
  WAMessage,
  MessageImageRequest,
  MessageFileRequest,
  VoiceBinaryFile,
  VoiceRemoteFile,
  MessageVoiceRequest,
  VideoRemoteFile,
  VideoBinaryFile,
  MessageVideoRequest,
  MessageStickerRequest,
  FileURL,
  FileContent,
  LinkPreviewData,
  MessageLinkCustomPreviewRequest,
  Button,
  SendButtonsRequest,
  Row,
  Section,
  SendListMessage,
  SendListRequest,
  MessageForwardRequest,
  SendSeenRequest,
  ChatRequest,
  MessageReactionRequest,
  MessageStarRequest,
  MessagePoll,
  MessagePollRequest,
  MessagePollVoteRequest,
  MessageLocationRequest,
  Contact,
  VCardContact,
  MessageContactVcardRequest,
  MessageButtonReply,
  WANumberExistResult,
  MessageReplyRequest,
  MessageLinkPreviewRequest,
  NewMessageIDResponse,
  ChatSummary,
  GetChatsOverviewParams,
  OverviewFilter,
  OverviewBodyRequest,
  ChatPictureResponse,
  ReadChatMessagesResponse,
  PinMessageRequest,
  EditMessageRequest,
  RejectCallRequest,
  Channel,
  CreateChannelRequest,
  ChannelMessage,
  ChannelSearchByView,
  ChannelPagination,
  ChannelPublicInfo,
  ChannelListResult,
  ChannelSearchByText,
  ChannelView,
  ChannelCountry,
  ChannelCategory,
  TextStatus,
  ImageStatus,
  VoiceStatus,
  VideoStatus,
  DeleteStatusRequest,
  Label,
  LabelBody,
  LabelID,
  SetLabelsRequest,
  ContactRequest,
  ContactUpdateBody,
  LidToPhoneNumber,
  CountResponse,
  Participant,
  CreateGroupRequest,
  JoinGroupRequest,
  JoinGroupResponse,
  DescriptionRequest,
  SubjectRequest,
  SettingsSecurityChangeInfo,
  SettingsMemberAddMode,
  SettingsMemberShareHistoryMode,
  SettingsMembershipApproval,
  GroupJoinRequest,
  ParticipantsRequest,
  GroupJoinRequestResult,
  GroupParticipant,
  WAHASessionPresence,
  WAHAPresenceData,
  WAHAChatPresences,
  EventLocation,
  EventMessage,
  EventMessageRequest,
  PingResponse,
  WAHAEnvironment,
  WorkerInfo,
  ServerStatusResponse,
  StopRequest,
  StopResponse,
  VoiceFileDTO,
  VideoFileDTO,
  SessionStatusPoint,
  WASessionStatusBody,
  WAHAWebhookSessionStatus,
  WAHAWebhookMessage,
  WAReaction,
  WAMessageReaction,
  WAHAWebhookMessageReaction,
  WAHAWebhookMessageAny,
  WAMessageAckBody,
  WAHAWebhookMessageAck,
  WAHAWebhookMessageAckGroup,
  WAMessageRevokedBody,
  WAHAWebhookMessageRevoked,
  WAMessageEditedBody,
  WAHAWebhookMessageEdited,
  GroupInfo,
  GroupV2JoinEvent,
  WebhookGroupV2Join,
  GroupId,
  GroupV2LeaveEvent,
  WebhookGroupV2Leave,
  GroupV2UpdateEvent,
  WebhookGroupV2Update,
  GroupV2ParticipantsEvent,
  WebhookGroupV2Participants,
  GroupV2ParticipantsJoinRequestEvent,
  WebhookGroupV2ParticipantsJoinRequest,
  WAHAWebhookPresenceUpdate,
  PollVote,
  MessageDestination,
  PollVotePayload,
  WAHAWebhookPollVote,
  WAHAWebhookPollVoteFailed,
  ChatArchiveEvent,
  WAHAWebhookChatArchive,
  CallData,
  WAHAWebhookCallReceived,
  WAHAWebhookCallAccepted,
  WAHAWebhookCallRejected,
  WAHAWebhookLabelUpsert,
  WAHAWebhookLabelDeleted,
  LabelChatAssociation,
  WAHAWebhookLabelChatAdded,
  WAHAWebhookLabelChatDeleted,
  EventResponse,
  EventResponsePayload,
  WAHAWebhookEventResponse,
  WAHAWebhookEventResponseFailed,
  EnginePayload,
  WAHAWebhookEngineEvent,
  WAHAWebhookGroupJoin,
  WAHAWebhookGroupLeave,
  WAHAWebhookStateChange,
} from './data-contracts'

export class Apps<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 🧩 Apps
   * @name AppsControllerList
   * @summary List all apps for a session
   * @request GET:/api/apps
   * @secure
   */
  appsControllerList = (
    query: {
      /**
       * Session name to list apps for
       * @example "default"
       */
      session: string
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/apps`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 🧩 Apps
   * @name AppsControllerCreate
   * @summary Create a new app
   * @request POST:/api/apps
   * @secure
   */
  appsControllerCreate = (data: App, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/apps`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 🧩 Apps
   * @name AppsControllerGet
   * @summary Get app by ID
   * @request GET:/api/apps/{id}
   * @secure
   */
  appsControllerGet = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/apps/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 🧩 Apps
   * @name AppsControllerUpdate
   * @summary Update an existing app
   * @request PUT:/api/apps/{id}
   * @secure
   */
  appsControllerUpdate = (id: string, data: App, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/apps/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 🧩 Apps
   * @name AppsControllerDelete
   * @summary Delete an app
   * @request DELETE:/api/apps/{id}
   * @secure
   */
  appsControllerDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/apps/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * @description Delete the app's stored data (database rows, caches) while keeping the app configured.
   *
   * @tags 🧩 Apps
   * @name AppsControllerPurge
   * @summary Purge app storage by app ID
   * @request POST:/api/apps/{id}/purge
   * @secure
   */
  appsControllerPurge = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/apps/${id}/purge`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * @description Delete the unique app's stored data for the session. The app must be enabled.
   *
   * @tags 🧩 Apps
   * @name AppsControllerPurgeUniqueApp
   * @summary Purge app storage by app name and session
   * @request POST:/api/apps/{app}/{session}/purge
   * @secure
   */
  appsControllerPurgeUniqueApp = (
    app:
      | 'argentine-phone-numbers'
      | 'brazilian-phone-numbers'
      | 'chatwoot'
      | 'calls'
      | 'mcp'
      | 'mexican-phone-numbers'
      | 'phone-numbers',
    session: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/apps/${app}/${session}/purge`,
      method: 'POST',
      secure: true,
      ...params,
    })
}
