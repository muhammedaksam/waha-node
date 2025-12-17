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
  ChatWootCommandsConfig,
  ChatWootConversationsConfig,
  ChatWootAppConfig,
  CallsAppChannelConfig,
  CallsAppConfig,
  App,
  MeInfo,
  ProxyConfig,
  IgnoreConfig,
  NowebStoreConfig,
  NowebConfig,
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
  ChatSummary,
  OverviewPaginationParams,
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
  NewMessageIDResponse,
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
  GroupParticipant,
  ParticipantsRequest,
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

export class Sessions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerList
   * @summary List all sessions
   * @request GET:/api/sessions
   * @secure
   */
  sessionsControllerList = (
    query?: {
      /** Expand additional session details. */
      expand?: 'apps'[]
      /**
       * Return all sessions, including those that are in the STOPPED state.
       * @example false
       */
      all?: boolean
    },
    params: RequestParams = {},
  ) =>
    this.request<SessionInfo[], any>({
      path: `/api/sessions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Create session a new session (and start it at the same time if required).
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerCreate
   * @summary Create a session
   * @request POST:/api/sessions
   * @secure
   */
  sessionsControllerCreate = (data: SessionCreateRequest, params: RequestParams = {}) =>
    this.request<SessionDTO, any>({
      path: `/api/sessions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerGet
   * @summary Get session information
   * @request GET:/api/sessions/{session}
   * @secure
   */
  sessionsControllerGet = (
    session: any,
    query?: {
      /** Expand additional session details. */
      expand?: 'apps'[]
    },
    params: RequestParams = {},
  ) =>
    this.request<SessionInfo, any>({
      path: `/api/sessions/${session}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerUpdate
   * @summary Update a session
   * @request PUT:/api/sessions/{session}
   * @secure
   */
  sessionsControllerUpdate = (
    session: any,
    data: SessionUpdateRequest,
    params: RequestParams = {},
  ) =>
    this.request<SessionDTO, any>({
      path: `/api/sessions/${session}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Delete the session with the given name. Stop and logout as well. Idempotent operation.
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerDelete
   * @summary Delete the session
   * @request DELETE:/api/sessions/{session}
   * @secure
   */
  sessionsControllerDelete = (session: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sessions/${session}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerGetMe
   * @summary Get information about the authenticated account
   * @request GET:/api/sessions/{session}/me
   * @secure
   */
  sessionsControllerGetMe = (session: any, params: RequestParams = {}) =>
    this.request<MeInfo, any>({
      path: `/api/sessions/${session}/me`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Start the session with the given name. The session must exist. Idempotent operation.
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerStart
   * @summary Start the session
   * @request POST:/api/sessions/{session}/start
   * @secure
   */
  sessionsControllerStart = (session: any, params: RequestParams = {}) =>
    this.request<SessionDTO, any>({
      path: `/api/sessions/${session}/start`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Stop the session with the given name. Idempotent operation.
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerStop
   * @summary Stop the session
   * @request POST:/api/sessions/{session}/stop
   * @secure
   */
  sessionsControllerStop = (session: any, params: RequestParams = {}) =>
    this.request<SessionDTO, any>({
      path: `/api/sessions/${session}/stop`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Logout the session, restart a session if it was not STOPPED
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerLogout
   * @summary Logout from the session
   * @request POST:/api/sessions/{session}/logout
   * @secure
   */
  sessionsControllerLogout = (session: any, params: RequestParams = {}) =>
    this.request<SessionDTO, any>({
      path: `/api/sessions/${session}/logout`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Restart the session with the given name.
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerRestart
   * @summary Restart the session
   * @request POST:/api/sessions/{session}/restart
   * @secure
   */
  sessionsControllerRestart = (session: any, params: RequestParams = {}) =>
    this.request<SessionDTO, any>({
      path: `/api/sessions/${session}/restart`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Create session (if not exists) or update a config (if exists) and start it.
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerDepracatedStart
   * @summary Upsert and Start session
   * @request POST:/api/sessions/start
   * @deprecated
   * @secure
   */
  sessionsControllerDepracatedStart = (
    data: SessionStartDeprecatedRequest,
    params: RequestParams = {},
  ) =>
    this.request<SessionDTO, any>({
      path: `/api/sessions/start`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Stop session and Logout by default.
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerDeprecatedStop
   * @summary Stop (and Logout if asked) session
   * @request POST:/api/sessions/stop
   * @deprecated
   * @secure
   */
  sessionsControllerDeprecatedStop = (
    data: SessionStopDeprecatedRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/sessions/stop`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description Stop, Logout and Delete session.
   *
   * @tags 🖥️ Sessions
   * @name SessionsControllerDeprecatedLogout
   * @summary Logout and Delete session.
   * @request POST:/api/sessions/logout
   * @deprecated
   * @secure
   */
  sessionsControllerDeprecatedLogout = (
    data: SessionLogoutDeprecatedRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/sessions/logout`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
