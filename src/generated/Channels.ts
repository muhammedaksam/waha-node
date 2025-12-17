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

export class Channels<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerList
   * @summary Get list of know channels
   * @request GET:/api/{session}/channels
   * @secure
   */
  channelsControllerList = (
    session: any,
    query?: {
      role?: 'OWNER' | 'ADMIN' | 'SUBSCRIBER'
    },
    params: RequestParams = {},
  ) =>
    this.request<Channel[], any>({
      path: `/api/${session}/channels`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerCreate
   * @summary Create a new channel.
   * @request POST:/api/{session}/channels
   * @secure
   */
  channelsControllerCreate = (
    session: any,
    data: CreateChannelRequest,
    params: RequestParams = {},
  ) =>
    this.request<Channel, any>({
      path: `/api/${session}/channels`,
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
   * @tags 📢 Channels
   * @name ChannelsControllerDelete
   * @summary Delete the channel.
   * @request DELETE:/api/{session}/channels/{id}
   * @secure
   */
  channelsControllerDelete = (session: any, id: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/channels/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * @description You can use either id (123@newsletter) OR invite code (https://www.whatsapp.com/channel/123)
   *
   * @tags 📢 Channels
   * @name ChannelsControllerGet
   * @summary Get the channel info
   * @request GET:/api/{session}/channels/{id}
   * @secure
   */
  channelsControllerGet = (session: any, id: any, params: RequestParams = {}) =>
    this.request<Channel, any>({
      path: `/api/${session}/channels/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description You can use either invite code (https://www.whatsapp.com/channel/123) or (123)ORChannel ID (123@newsletter).
   *
   * @tags 📢 Channels
   * @name ChannelsControllerPreviewChannelMessages
   * @summary Preview channel messages
   * @request GET:/api/{session}/channels/{id}/messages/preview
   * @secure
   */
  channelsControllerPreviewChannelMessages = (
    session: any,
    id: any,
    query: {
      /** @default false */
      downloadMedia: boolean
      /** @default 10 */
      limit: number
    },
    params: RequestParams = {},
  ) =>
    this.request<ChannelMessage[], any>({
      path: `/api/${session}/channels/${id}/messages/preview`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerFollow
   * @summary Follow the channel.
   * @request POST:/api/{session}/channels/{id}/follow
   * @secure
   */
  channelsControllerFollow = (session: any, id: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/channels/${id}/follow`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerUnfollow
   * @summary Unfollow the channel.
   * @request POST:/api/{session}/channels/{id}/unfollow
   * @secure
   */
  channelsControllerUnfollow = (session: any, id: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/channels/${id}/unfollow`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerMute
   * @summary Mute the channel.
   * @request POST:/api/{session}/channels/{id}/mute
   * @secure
   */
  channelsControllerMute = (session: any, id: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/channels/${id}/mute`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerUnmute
   * @summary Unmute the channel.
   * @request POST:/api/{session}/channels/{id}/unmute
   * @secure
   */
  channelsControllerUnmute = (session: any, id: any, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/${session}/channels/${id}/unmute`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerSearchByView
   * @summary Search for channels (by view)
   * @request POST:/api/{session}/channels/search/by-view
   * @secure
   */
  channelsControllerSearchByView = (
    session: any,
    data: ChannelSearchByView,
    params: RequestParams = {},
  ) =>
    this.request<ChannelListResult, any>({
      path: `/api/${session}/channels/search/by-view`,
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
   * @tags 📢 Channels
   * @name ChannelsControllerSearchByText
   * @summary Search for channels (by text)
   * @request POST:/api/{session}/channels/search/by-text
   * @secure
   */
  channelsControllerSearchByText = (
    session: any,
    data: ChannelSearchByText,
    params: RequestParams = {},
  ) =>
    this.request<ChannelListResult, any>({
      path: `/api/${session}/channels/search/by-text`,
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
   * @tags 📢 Channels
   * @name ChannelsControllerGetSearchViews
   * @summary Get list of views for channel search
   * @request GET:/api/{session}/channels/search/views
   * @secure
   */
  channelsControllerGetSearchViews = (session: any, params: RequestParams = {}) =>
    this.request<ChannelView[], any>({
      path: `/api/${session}/channels/search/views`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerGetSearchCountries
   * @summary Get list of countries for channel search
   * @request GET:/api/{session}/channels/search/countries
   * @secure
   */
  channelsControllerGetSearchCountries = (session: any, params: RequestParams = {}) =>
    this.request<ChannelCountry[], any>({
      path: `/api/${session}/channels/search/countries`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 📢 Channels
   * @name ChannelsControllerGetSearchCategories
   * @summary Get list of categories for channel search
   * @request GET:/api/{session}/channels/search/categories
   * @secure
   */
  channelsControllerGetSearchCategories = (session: any, params: RequestParams = {}) =>
    this.request<ChannelCategory[], any>({
      path: `/api/${session}/channels/search/categories`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
