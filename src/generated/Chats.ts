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

export class Chats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerGetChats
   * @summary Get chats
   * @request GET:/api/{session}/chats
   * @secure
   */
  chatsControllerGetChats = (
    session: any,
    query?: {
      /** Sort by field */
      sortBy?: 'conversationTimestamp' | 'id' | 'name'
      /** Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first) */
      sortOrder?: 'desc' | 'asc'
      limit?: number
      offset?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/${session}/chats`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerGetChatsOverview
   * @summary Get chats overview. Includes all necessary things to build UI "your chats overview" page - chat id, name, picture, last message. Sorting by last message timestamp
   * @request GET:/api/{session}/chats/overview
   * @secure
   */
  chatsControllerGetChatsOverview = (
    session: any,
    query?: {
      /** @default 20 */
      limit?: number
      offset?: number
      /**
       * Filter by chat ids
       * @example ["111111111@c.us"]
       */
      ids?: string[]
    },
    params: RequestParams = {},
  ) =>
    this.request<ChatSummary[], any>({
      path: `/api/${session}/chats/overview`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerPostChatsOverview
   * @summary Get chats overview. Use POST if you have too many "ids" params - GET can limit it
   * @request POST:/api/{session}/chats/overview
   * @secure
   */
  chatsControllerPostChatsOverview = (
    session: any,
    data: OverviewBodyRequest,
    params: RequestParams = {},
  ) =>
    this.request<ChatSummary[], any>({
      path: `/api/${session}/chats/overview`,
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
   * @tags 💬 Chats
   * @name ChatsControllerDeleteChat
   * @summary Deletes the chat
   * @request DELETE:/api/{session}/chats/{chatId}
   * @secure
   */
  chatsControllerDeleteChat = (session: any, chatId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/chats/${chatId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerGetChatPicture
   * @summary Gets chat picture
   * @request GET:/api/{session}/chats/{chatId}/picture
   * @secure
   */
  chatsControllerGetChatPicture = (
    session: any,
    chatId: string,
    query?: {
      /**
       * Refresh the picture from the server (24h cache by default). Do not refresh if not needed, you can get rate limit error
       * @default false
       * @example false
       */
      refresh?: boolean
    },
    params: RequestParams = {},
  ) =>
    this.request<ChatPictureResponse, any>({
      path: `/api/${session}/chats/${chatId}/picture`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerGetChatMessages
   * @summary Gets messages in the chat
   * @request GET:/api/{session}/chats/{chatId}/messages
   * @secure
   */
  chatsControllerGetChatMessages = (
    session: any,
    chatId: string,
    query: {
      /**
       * Sort by field
       * @default "timestamp"
       */
      sortBy?: 'timestamp' | 'messageTimestamp'
      /** Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first) */
      sortOrder?: 'desc' | 'asc'
      /**
       * Download media for messages
       * @default true
       * @example false
       */
      downloadMedia?: boolean
      /** @default 10 */
      limit: number
      offset?: number
      /** Filter messages before this timestamp (inclusive) */
      'filter.timestamp.lte'?: number
      /** Filter messages after this timestamp (inclusive) */
      'filter.timestamp.gte'?: number
      /** From me filter (by default shows all messages) */
      'filter.fromMe'?: boolean
      /** Filter messages by acknowledgment status */
      'filter.ack'?: 'ERROR' | 'PENDING' | 'SERVER' | 'DEVICE' | 'READ' | 'PLAYED'
    },
    params: RequestParams = {},
  ) =>
    this.request<WAMessage[], any>({
      path: `/api/${session}/chats/${chatId}/messages`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerClearMessages
   * @summary Clears all messages from the chat
   * @request DELETE:/api/{session}/chats/{chatId}/messages
   * @secure
   */
  chatsControllerClearMessages = (session: any, chatId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/chats/${chatId}/messages`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerReadChatMessages
   * @summary Read unread messages in the chat
   * @request POST:/api/{session}/chats/{chatId}/messages/read
   * @secure
   */
  chatsControllerReadChatMessages = (
    session: any,
    chatId: string,
    query?: {
      /**
       * How much messages to read (latest first)
       * @example 30
       */
      messages?: number
      /**
       * How much days to read (latest first)
       * @default 7
       */
      days?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<ReadChatMessagesResponse, any>({
      path: `/api/${session}/chats/${chatId}/messages/read`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerGetChatMessage
   * @summary Gets message by id
   * @request GET:/api/{session}/chats/{chatId}/messages/{messageId}
   * @secure
   */
  chatsControllerGetChatMessage = (
    session: any,
    chatId: string,
    messageId: string,
    query?: {
      /**
       * Download media for messages
       * @default true
       * @example true
       */
      downloadMedia?: boolean
    },
    params: RequestParams = {},
  ) =>
    this.request<WAMessage, any>({
      path: `/api/${session}/chats/${chatId}/messages/${messageId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerDeleteMessage
   * @summary Deletes a message from the chat
   * @request DELETE:/api/{session}/chats/{chatId}/messages/{messageId}
   * @secure
   */
  chatsControllerDeleteMessage = (
    session: any,
    chatId: string,
    messageId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/${session}/chats/${chatId}/messages/${messageId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerEditMessage
   * @summary Edits a message in the chat
   * @request PUT:/api/{session}/chats/{chatId}/messages/{messageId}
   * @secure
   */
  chatsControllerEditMessage = (
    session: any,
    chatId: string,
    messageId: string,
    data: EditMessageRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/${session}/chats/${chatId}/messages/${messageId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerPinMessage
   * @summary Pins a message in the chat
   * @request POST:/api/{session}/chats/{chatId}/messages/{messageId}/pin
   * @secure
   */
  chatsControllerPinMessage = (
    session: any,
    chatId: string,
    messageId: string,
    data: PinMessageRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/${session}/chats/${chatId}/messages/${messageId}/pin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerUnpinMessage
   * @summary Unpins a message in the chat
   * @request POST:/api/{session}/chats/{chatId}/messages/{messageId}/unpin
   * @secure
   */
  chatsControllerUnpinMessage = (
    session: any,
    chatId: string,
    messageId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/${session}/chats/${chatId}/messages/${messageId}/unpin`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerArchiveChat
   * @summary Archive the chat
   * @request POST:/api/{session}/chats/{chatId}/archive
   * @secure
   */
  chatsControllerArchiveChat = (session: any, chatId: string, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/${session}/chats/${chatId}/archive`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerUnarchiveChat
   * @summary Unarchive the chat
   * @request POST:/api/{session}/chats/{chatId}/unarchive
   * @secure
   */
  chatsControllerUnarchiveChat = (session: any, chatId: string, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/${session}/chats/${chatId}/unarchive`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 💬 Chats
   * @name ChatsControllerUnreadChat
   * @summary Unread the chat
   * @request POST:/api/{session}/chats/{chatId}/unread
   * @secure
   */
  chatsControllerUnreadChat = (session: any, chatId: string, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/${session}/chats/${chatId}/unread`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
}
