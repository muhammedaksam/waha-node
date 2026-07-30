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
  ChatWootCommandsConfig,
  ChatWootConversationsConfig,
  ChatWootAppConfig,
  CallsAppChannelConfig,
  CallsAppConfig,
  McpAppConfig,
  App,
  ReachoutTimelockData,
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

export class Pairing<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 📱 Pairing
   * @name AuthControllerGetQr
   * @summary Get QR code for pairing WhatsApp API.
   * @request GET:/api/{session}/auth/qr
   * @secure
   */
  authControllerGetQr = (
    session: any,
    query: {
      /** @default "image" */
      format: 'image' | 'raw'
    },
    params: RequestParams = {},
  ) =>
    this.request<File, any>({
      path: `/api/${session}/auth/qr`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📱 Pairing
   * @name AuthControllerRequestCode
   * @summary Request authentication code.
   * @request POST:/api/{session}/auth/request-code
   * @secure
   */
  authControllerRequestCode = (
    session: any,
    data: RequestCodeRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/${session}/auth/request-code`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description Available while the session is in PASSKEY_REQUIRED status. Pass the challenge to navigator.credentials.get({ publicKey: challenge }) on the https://web.whatsapp.com origin.
   *
   * @tags 📱 Pairing
   * @name AuthControllerGetPasskeyChallenge
   * @summary Get the pending passkey (WebAuthn) challenge.
   * @request GET:/api/{session}/auth/passkey/challenge
   * @secure
   */
  authControllerGetPasskeyChallenge = (session: any, params: RequestParams = {}) =>
    this.request<PasskeyChallenge, any>({
      path: `/api/${session}/auth/passkey/challenge`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📱 Pairing
   * @name AuthControllerSubmitPasskey
   * @summary Submit a WebAuthn passkey assertion to finish pairing.
   * @request POST:/api/{session}/auth/passkey
   * @secure
   */
  authControllerSubmitPasskey = (
    session: any,
    data: PasskeyAssertionRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/${session}/auth/passkey`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description Available while the session is in PASSKEY_CONFIRMATION_REQUIRED status. Most pairings skip this step - WhatsApp confirms them right after the assertion.
   *
   * @tags 📱 Pairing
   * @name AuthControllerGetPasskeyConfirmation
   * @summary Get the pending passkey confirmation code.
   * @request GET:/api/{session}/auth/passkey/confirmation
   * @secure
   */
  authControllerGetPasskeyConfirmation = (session: any, params: RequestParams = {}) =>
    this.request<PasskeyConfirmationResponse, any>({
      path: `/api/${session}/auth/passkey/confirmation`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📱 Pairing
   * @name AuthControllerConfirmPasskey
   * @summary Confirm passkey pairing (only needed for the manual code case).
   * @request POST:/api/{session}/auth/passkey/confirm
   * @secure
   */
  authControllerConfirmPasskey = (session: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/auth/passkey/confirm`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📱 Pairing
   * @name ScreenshotControllerScreenshot
   * @summary Get a screenshot of the current WhatsApp session (**WEBJS/WPP** only)
   * @request GET:/api/screenshot
   * @secure
   */
  screenshotControllerScreenshot = (
    query: {
      /** @default "default" */
      session: string
    },
    params: RequestParams = {},
  ) =>
    this.request<File, any>({
      path: `/api/screenshot`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
