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


 import type { AxiosRequestConfig, AxiosResponse } from "axios"; 
import { HttpClient, RequestParams, ContentType, HttpResponse } from "./http-client";
import { Base64File, QRCodeValue, RequestCodeRequest, ChatWootCommandsConfig, ChatWootConversationsConfig, ChatWootAppConfig, CallsAppChannelConfig, CallsAppConfig, App, MeInfo, ProxyConfig, IgnoreConfig, NowebStoreConfig, NowebConfig, WebjsConfig, HmacConfiguration, RetriesConfiguration, CustomHeader, WebhookConfig, SessionConfig, SessionInfo, SessionCreateRequest, SessionDTO, SessionUpdateRequest, SessionStartDeprecatedRequest, SessionStopDeprecatedRequest, SessionLogoutDeprecatedRequest, MyProfile, ProfileNameRequest, Result, ProfileStatusRequest, RemoteFile, BinaryFile, ProfilePictureRequest, MessageTextRequest, S3MediaData, WAMedia, WALocation, ReplyToMessage, WAMessage, MessageImageRequest, MessageFileRequest, VoiceBinaryFile, VoiceRemoteFile, MessageVoiceRequest, VideoRemoteFile, VideoBinaryFile, MessageVideoRequest, FileURL, FileContent, LinkPreviewData, MessageLinkCustomPreviewRequest, Button, SendButtonsRequest, Row, Section, SendListMessage, SendListRequest, MessageForwardRequest, SendSeenRequest, ChatRequest, MessageReactionRequest, MessageStarRequest, MessagePoll, MessagePollRequest, MessagePollVoteRequest, MessageLocationRequest, Contact, VCardContact, MessageContactVcardRequest, MessageButtonReply, WANumberExistResult, MessageReplyRequest, MessageLinkPreviewRequest, ChatSummary, OverviewPaginationParams, OverviewFilter, OverviewBodyRequest, ChatPictureResponse, ReadChatMessagesResponse, PinMessageRequest, EditMessageRequest, RejectCallRequest, Channel, CreateChannelRequest, ChannelMessage, ChannelSearchByView, ChannelPagination, ChannelPublicInfo, ChannelListResult, ChannelSearchByText, ChannelView, ChannelCountry, ChannelCategory, TextStatus, ImageStatus, VoiceStatus, VideoStatus, DeleteStatusRequest, NewMessageIDResponse, Label, LabelBody, LabelID, SetLabelsRequest, ContactRequest, ContactUpdateBody, LidToPhoneNumber, CountResponse, Participant, CreateGroupRequest, JoinGroupRequest, JoinGroupResponse, DescriptionRequest, SubjectRequest, SettingsSecurityChangeInfo, GroupParticipant, ParticipantsRequest, WAHASessionPresence, WAHAPresenceData, WAHAChatPresences, EventLocation, EventMessage, EventMessageRequest, PingResponse, WAHAEnvironment, WorkerInfo, ServerStatusResponse, StopRequest, StopResponse, VoiceFileDTO, VideoFileDTO, SessionStatusPoint, WASessionStatusBody, WAHAWebhookSessionStatus, WAHAWebhookMessage, WAReaction, WAMessageReaction, WAHAWebhookMessageReaction, WAHAWebhookMessageAny, WAMessageAckBody, WAHAWebhookMessageAck, WAHAWebhookMessageAckGroup, WAMessageRevokedBody, WAHAWebhookMessageRevoked, WAMessageEditedBody, WAHAWebhookMessageEdited, GroupInfo, GroupV2JoinEvent, WebhookGroupV2Join, GroupId, GroupV2LeaveEvent, WebhookGroupV2Leave, GroupV2UpdateEvent, WebhookGroupV2Update, GroupV2ParticipantsEvent, WebhookGroupV2Participants, WAHAWebhookPresenceUpdate, PollVote, MessageDestination, PollVotePayload, WAHAWebhookPollVote, WAHAWebhookPollVoteFailed, ChatArchiveEvent, WAHAWebhookChatArchive, CallData, WAHAWebhookCallReceived, WAHAWebhookCallAccepted, WAHAWebhookCallRejected, WAHAWebhookLabelUpsert, WAHAWebhookLabelDeleted, LabelChatAssociation, WAHAWebhookLabelChatAdded, WAHAWebhookLabelChatDeleted, EventResponse, EventResponsePayload, WAHAWebhookEventResponse, WAHAWebhookEventResponseFailed, EnginePayload, WAHAWebhookEngineEvent, WAHAWebhookGroupJoin, WAHAWebhookGroupLeave, WAHAWebhookStateChange } from "./data-contracts"

export class Observability<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * @description Check if the server is alive and responding to requests.
 *
 * @tags 🔍 Observability
 * @name PingControllerPing
 * @summary Ping the server
 * @request GET:/ping
 */
pingControllerPing = (params: RequestParams = {}) =>
    this.request<PingResponse, any>({
        path: `/ping`,
        method: 'GET',
                                        format: "json",        ...params,
    })
            /**
 * @description Perform all health checks and return the server's health status.
 *
 * @tags 🔍 Observability
 * @name HealthControllerCheck
 * @summary Check the health of the server
 * @request GET:/health
 * @secure
 */
healthControllerCheck = (params: RequestParams = {}) =>
    this.request<{
  /** @example "ok" */
    status?: string,
  /** @example {"database":{"status":"up"}} */
    info?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  /** @example {} */
    error?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  /** @example {"database":{"status":"up"}} */
    details?: Record<string,{
    status: string,
    [key: string]: any,

}>,

}, {
  /** @example "error" */
    status?: string,
  /** @example {"database":{"status":"up"}} */
    info?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  /** @example {"redis":{"status":"down","message":"Could not connect"}} */
    error?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
    details?: Record<string,{
    status: string,
    [key: string]: any,

}>,

}>({
        path: `/health`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 🔍 Observability
 * @name ServerControllerGet
 * @summary Get the version of the server
 * @request GET:/api/server/version
 * @secure
 */
serverControllerGet = (params: RequestParams = {}) =>
    this.request<WAHAEnvironment, any>({
        path: `/api/server/version`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 🔍 Observability
 * @name ServerControllerEnvironment
 * @summary Get the server environment
 * @request GET:/api/server/environment
 * @secure
 */
serverControllerEnvironment = (query?: {
  /**
   * Include all environment variables
   * @default false
   * @example false
   */
    all?: boolean,

}, params: RequestParams = {}) =>
    this.request<object, any>({
        path: `/api/server/environment`,
        method: 'GET',
        query: query,                secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 🔍 Observability
 * @name ServerControllerStatus
 * @summary Get the server status
 * @request GET:/api/server/status
 * @secure
 */
serverControllerStatus = (params: RequestParams = {}) =>
    this.request<ServerStatusResponse, any>({
        path: `/api/server/status`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * @description If you're using docker, after calling this endpoint Docker will start a new container, so you can use this endpoint to restart the server
 *
 * @tags 🔍 Observability
 * @name ServerControllerStop
 * @summary Stop (and restart) the server
 * @request POST:/api/server/stop
 * @secure
 */
serverControllerStop = (data: StopRequest, params: RequestParams = {}) =>
    this.request<StopResponse, any>({
        path: `/api/server/stop`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    })
            /**
 * @description Uses the Node.js inspector profiler to capture a .cpuprofile
 *
 * @tags 🔍 Observability
 * @name ServerDebugControllerCpuProfile
 * @summary Collect and return a CPU profile for the current nodejs process
 * @request GET:/api/server/debug/cpu
 * @secure
 */
serverDebugControllerCpuProfile = (query?: {
  /**
   * How many seconds to sample CPU
   * @min 1
   * @default 30
   * @example 30
   */
    seconds?: number,

}, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/server/debug/cpu`,
        method: 'GET',
        query: query,                secure: true,                        ...params,
    })
            /**
 * @description Return a heapsnapshot of the server's memory
 *
 * @tags 🔍 Observability
 * @name ServerDebugControllerHeapsnapshot
 * @summary Return a heapsnapshot for the current nodejs process
 * @request GET:/api/server/debug/heapsnapshot
 * @secure
 */
serverDebugControllerHeapsnapshot = (params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/server/debug/heapsnapshot`,
        method: 'GET',
                        secure: true,                        ...params,
    })
            /**
 * @description Uses https://pptr.dev/api/puppeteer.tracing
 *
 * @tags 🔍 Observability
 * @name ServerDebugControllerBrowserTrace
 * @summary Collect and get a trace.json for Chrome DevTools
 * @request GET:/api/server/debug/browser/trace/{session}
 * @secure
 */
serverDebugControllerBrowserTrace = (session: any, query: {
  /**
   * How many seconds to trace
   * @default 30
   * @example 30
   */
    seconds: number,
  /**
   * Categories to trace (all by default)
   * @default ["*"]
   * @example ["*"]
   */
    categories: (string)[],

}, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/server/debug/browser/trace/${session}`,
        method: 'GET',
        query: query,                secure: true,                        ...params,
    })
            /**
 * @description Use 'GET /api/server/version' instead 
 *
 * @tags 🔍 Observability
 * @name VersionControllerGet
 * @summary Get the server version
 * @request GET:/api/version
 * @deprecated
 * @secure
 */
versionControllerGet = (params: RequestParams = {}) =>
    this.request<WAHAEnvironment, any>({
        path: `/api/version`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
    }
