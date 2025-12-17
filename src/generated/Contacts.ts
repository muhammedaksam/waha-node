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

export class Contacts<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name ContactsControllerGetAll
 * @summary Get all contacts
 * @request GET:/api/contacts/all
 * @secure
 */
contactsControllerGetAll = (query: {
  /** @default "default" */
    session: string,
  /** Sort by field */
    sortBy?: "id" | "name",
  /** Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first) */
    sortOrder?: "desc" | "asc",
    limit?: number,
    offset?: number,

}, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/contacts/all`,
        method: 'GET',
        query: query,                secure: true,                        ...params,
    })
            /**
 * @description The method always return result, even if the phone number is not registered in WhatsApp. For that - use /contacts/check-exists endpoint below.
 *
 * @tags 👤 Contacts
 * @name ContactsControllerGet
 * @summary Get contact basic info
 * @request GET:/api/contacts
 * @secure
 */
contactsControllerGet = (query: {
  /** @example "11111111111@c.us" */
    contactId: string,
  /** @default "default" */
    session: string,

}, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/contacts`,
        method: 'GET',
        query: query,                secure: true,                        ...params,
    })
            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name ContactsControllerCheckExists
 * @summary Check phone number is registered in WhatsApp.
 * @request GET:/api/contacts/check-exists
 * @secure
 */
contactsControllerCheckExists = (query: {
  /**
   * The phone number to check
   * @example "1213213213"
   */
    phone: string,
  /** @default "default" */
    session: string,

}, params: RequestParams = {}) =>
    this.request<WANumberExistResult, any>({
        path: `/api/contacts/check-exists`,
        method: 'GET',
        query: query,                secure: true,                format: "json",        ...params,
    })
            /**
 * @description Returns null if you do not have permission to read their status.
 *
 * @tags 👤 Contacts
 * @name ContactsControllerGetAbout
 * @summary Gets the Contact's "about" info
 * @request GET:/api/contacts/about
 * @secure
 */
contactsControllerGetAbout = (query: {
  /** @example "11111111111@c.us" */
    contactId: string,
  /** @default "default" */
    session: string,

}, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/contacts/about`,
        method: 'GET',
        query: query,                secure: true,                        ...params,
    })
            /**
 * @description If privacy settings do not allow to get the picture, the method will return null.
 *
 * @tags 👤 Contacts
 * @name ContactsControllerGetProfilePicture
 * @summary Get contact's profile picture URL
 * @request GET:/api/contacts/profile-picture
 * @secure
 */
contactsControllerGetProfilePicture = (query: {
  /** @example "11111111111@c.us" */
    contactId: string,
  /**
   * Refresh the picture from the server (24h cache by default). Do not refresh if not needed, you can get rate limit error
   * @default false
   * @example false
   */
    refresh?: boolean,
  /** @default "default" */
    session: string,

}, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/contacts/profile-picture`,
        method: 'GET',
        query: query,                secure: true,                        ...params,
    })
            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name ContactsControllerBlock
 * @summary Block contact
 * @request POST:/api/contacts/block
 * @secure
 */
contactsControllerBlock = (data: ContactRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/contacts/block`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name ContactsControllerUnblock
 * @summary Unblock contact
 * @request POST:/api/contacts/unblock
 * @secure
 */
contactsControllerUnblock = (data: ContactRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/contacts/unblock`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * @description Create or update contact on the phone address book. May not work if you have installed many WhatsApp apps on the same phone
 *
 * @tags 👤 Contacts
 * @name ContactsSessionControllerPut
 * @summary Create or update contact
 * @request PUT:/api/{session}/contacts/{chatId}
 * @secure
 */
contactsSessionControllerPut = (session: any, chatId: string, data: ContactUpdateBody, params: RequestParams = {}) =>
    this.request<Result, any>({
        path: `/api/${session}/contacts/${chatId}`,
        method: 'PUT',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name LidsControllerGetAll
 * @summary Get all known lids to phone number mapping
 * @request GET:/api/{session}/lids
 * @secure
 */
lidsControllerGetAll = (session: any, query?: {
  /** @default 100 */
    limit?: number,
  /** @default 0 */
    offset?: number,

}, params: RequestParams = {}) =>
    this.request<(LidToPhoneNumber)[], any>({
        path: `/api/${session}/lids`,
        method: 'GET',
        query: query,                secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name LidsControllerGetLidsCount
 * @summary Get the number of known lids
 * @request GET:/api/{session}/lids/count
 * @secure
 */
lidsControllerGetLidsCount = (session: any, params: RequestParams = {}) =>
    this.request<CountResponse, any>({
        path: `/api/${session}/lids/count`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name LidsControllerFindPnByLid
 * @summary Get phone number by lid
 * @request GET:/api/{session}/lids/{lid}
 * @secure
 */
lidsControllerFindPnByLid = (session: any, lid: string, params: RequestParams = {}) =>
    this.request<LidToPhoneNumber, any>({
        path: `/api/${session}/lids/${lid}`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👤 Contacts
 * @name LidsControllerFindLidByPhoneNumber
 * @summary Get lid by phone number (chat id)
 * @request GET:/api/{session}/lids/pn/{phoneNumber}
 * @secure
 */
lidsControllerFindLidByPhoneNumber = (session: any, phoneNumber: string, params: RequestParams = {}) =>
    this.request<LidToPhoneNumber, any>({
        path: `/api/${session}/lids/pn/${phoneNumber}`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
    }
