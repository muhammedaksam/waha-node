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

export class AppsPhoneNumbers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Entries from the in-memory cache tier of the running session, sorted by key. The session must be running.
   *
   * @tags 🧩 Apps: Phone Numbers
   * @name PhoneNumbersControllerMemory
   * @summary List in-memory cache entries
   * @request GET:/api/apps/phone-numbers/{session}/cache/memory
   * @secure
   */
  phoneNumbersControllerMemory = (
    session: any,
    query?: {
      limit?: number
      offset?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/apps/phone-numbers/${session}/cache/memory`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * @description Entries from the persistent (database) cache tier, sorted by id. Works even when the session is stopped.
   *
   * @tags 🧩 Apps: Phone Numbers
   * @name PhoneNumbersControllerDb
   * @summary List persistent cache entries
   * @request GET:/api/apps/phone-numbers/{session}/cache/db
   * @secure
   */
  phoneNumbersControllerDb = (
    session: any,
    query?: {
      limit?: number
      offset?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/apps/phone-numbers/${session}/cache/db`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * @description Stats for both cache tiers. "memory" is null when the session is not running, "db" is null when the persistent cache is disabled.
   *
   * @tags 🧩 Apps: Phone Numbers
   * @name PhoneNumbersControllerStats
   * @summary Get cache stats
   * @request GET:/api/apps/phone-numbers/{session}/cache/stats
   * @secure
   */
  phoneNumbersControllerStats = (session: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/apps/phone-numbers/${session}/cache/stats`,
      method: 'GET',
      secure: true,
      ...params,
    })
  /**
   * @description Removes ALL persistent cache entries and clears the in-memory tier (the in-memory tier only when the session is running).
   *
   * @tags 🧩 Apps: Phone Numbers
   * @name PhoneNumbersControllerPurge
   * @summary Purge the resolved-numbers cache
   * @request DELETE:/api/apps/phone-numbers/{session}/cache/purge
   * @secure
   */
  phoneNumbersControllerPurge = (session: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/apps/phone-numbers/${session}/cache/purge`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
}
