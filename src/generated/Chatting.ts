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

export class Chatting<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendText
   * @summary Send a text message
   * @request POST:/api/sendText
   * @secure
   */
  chattingControllerSendText = (data: MessageTextRequest, params: RequestParams = {}) =>
    this.request<WAMessage, any>({
      path: `/api/sendText`,
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
   * @tags 📤 Chatting
   * @name ChattingControllerSendTextGet
   * @summary Send a text message
   * @request GET:/api/sendText
   * @deprecated
   * @secure
   */
  chattingControllerSendTextGet = (
    query: {
      phone: string
      text: string
      /** @default "default" */
      session: string
    },
    params: RequestParams = {},
  ) =>
    this.request<object, any>({
      path: `/api/sendText`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Either from an URL or base64 data - look at the request schemas for details.
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendImage
   * @summary Send an image
   * @request POST:/api/sendImage
   * @secure
   */
  chattingControllerSendImage = (data: MessageImageRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/sendImage`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Either from an URL or base64 data - look at the request schemas for details.
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendFile
   * @summary Send a file
   * @request POST:/api/sendFile
   * @secure
   */
  chattingControllerSendFile = (data: MessageFileRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/sendFile`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Either from an URL or base64 data - look at the request schemas for details.
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendVoice
   * @summary Send an voice message
   * @request POST:/api/sendVoice
   * @secure
   */
  chattingControllerSendVoice = (data: MessageVoiceRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/sendVoice`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Either from an URL or base64 data - look at the request schemas for details.
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendVideo
   * @summary Send a video
   * @request POST:/api/sendVideo
   * @secure
   */
  chattingControllerSendVideo = (data: MessageVideoRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sendVideo`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description You can use regular /api/sendText if you wanna send auto-generated link preview.
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendLinkCustomPreview
   * @summary Send a text message with a CUSTOM link preview.
   * @request POST:/api/send/link-custom-preview
   * @secure
   */
  chattingControllerSendLinkCustomPreview = (
    data: MessageLinkCustomPreviewRequest,
    params: RequestParams = {},
  ) =>
    this.request<object, any>({
      path: `/api/send/link-custom-preview`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Send Buttons
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendButtons
   * @summary Send buttons message (interactive)
   * @request POST:/api/sendButtons
   * @deprecated
   * @secure
   */
  chattingControllerSendButtons = (data: SendButtonsRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sendButtons`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description Send a List message with sections and rows
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendList
   * @summary Send a list message (interactive)
   * @request POST:/api/sendList
   * @secure
   */
  chattingControllerSendList = (data: SendListRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/sendList`,
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
   * @tags 📤 Chatting
   * @name ChattingControllerForwardMessage
   * @request POST:/api/forwardMessage
   * @secure
   */
  chattingControllerForwardMessage = (data: MessageForwardRequest, params: RequestParams = {}) =>
    this.request<WAMessage, any>({
      path: `/api/forwardMessage`,
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
   * @tags 📤 Chatting
   * @name ChattingControllerSendSeen
   * @request POST:/api/sendSeen
   * @secure
   */
  chattingControllerSendSeen = (data: SendSeenRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/sendSeen`,
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
   * @tags 📤 Chatting
   * @name ChattingControllerStartTyping
   * @request POST:/api/startTyping
   * @secure
   */
  chattingControllerStartTyping = (data: ChatRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/startTyping`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📤 Chatting
   * @name ChattingControllerStopTyping
   * @request POST:/api/stopTyping
   * @secure
   */
  chattingControllerStopTyping = (data: ChatRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/stopTyping`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSetReaction
   * @summary React to a message with an emoji
   * @request PUT:/api/reaction
   * @secure
   */
  chattingControllerSetReaction = (data: MessageReactionRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/reaction`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSetStar
   * @summary Star or unstar a message
   * @request PUT:/api/star
   * @secure
   */
  chattingControllerSetStar = (data: MessageStarRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/star`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description You can use it as buttons or list replacement
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendPoll
   * @summary Send a poll with options
   * @request POST:/api/sendPoll
   * @secure
   */
  chattingControllerSendPoll = (data: MessagePollRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sendPoll`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description Cast vote(s) on an existing poll message
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendPollVote
   * @summary Vote on a poll
   * @request POST:/api/sendPollVote
   * @secure
   */
  chattingControllerSendPollVote = (data: MessagePollVoteRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sendPollVote`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendLocation
   * @request POST:/api/sendLocation
   * @secure
   */
  chattingControllerSendLocation = (data: MessageLocationRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/sendLocation`,
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
   * @tags 📤 Chatting
   * @name ChattingControllerSendContactVcard
   * @request POST:/api/sendContactVcard
   * @secure
   */
  chattingControllerSendContactVcard = (
    data: MessageContactVcardRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/sendContactVcard`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📤 Chatting
   * @name ChattingControllerSendButtonsReply
   * @summary Reply on a button message
   * @request POST:/api/send/buttons/reply
   * @secure
   */
  chattingControllerSendButtonsReply = (data: MessageButtonReply, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/send/buttons/reply`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description DEPRECATED. Use "GET /api/chats/{id}/messages" instead
   *
   * @tags 📤 Chatting
   * @name ChattingControllerGetMessages
   * @summary Get messages in a chat
   * @request GET:/api/messages
   * @deprecated
   * @secure
   */
  chattingControllerGetMessages = (
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
      /** @example "11111111111@c.us" */
      chatId: string
      /** @default "default" */
      session: string
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
      path: `/api/messages`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description DEPRECATED. Use "POST /contacts/check-exists" instead
   *
   * @tags 📤 Chatting
   * @name ChattingControllerDeprecatedCheckNumberStatus
   * @summary Check number status
   * @request GET:/api/checkNumberStatus
   * @deprecated
   * @secure
   */
  chattingControllerDeprecatedCheckNumberStatus = (
    query: {
      /**
       * The phone number to check
       * @example "1213213213"
       */
      phone: string
      /** @default "default" */
      session: string
    },
    params: RequestParams = {},
  ) =>
    this.request<WANumberExistResult, any>({
      path: `/api/checkNumberStatus`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📤 Chatting
   * @name ChattingControllerReply
   * @summary DEPRECATED - you can set "reply_to" field when sending text, image, etc
   * @request POST:/api/reply
   * @deprecated
   * @secure
   */
  chattingControllerReply = (data: MessageReplyRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/reply`,
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
   * @tags 📤 Chatting
   * @name ChattingControllerSendLinkPreviewDeprecated
   * @request POST:/api/sendLinkPreview
   * @deprecated
   * @secure
   */
  chattingControllerSendLinkPreviewDeprecated = (
    data: MessageLinkPreviewRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/sendLinkPreview`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
