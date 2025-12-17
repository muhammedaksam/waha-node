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

export class Groups<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerCreateGroup
 * @summary Create a new group.
 * @request POST:/api/{session}/groups
 * @secure
 */
groupsControllerCreateGroup = (session: any, data: CreateGroupRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetGroups
 * @summary Get all groups.
 * @request GET:/api/{session}/groups
 * @secure
 */
groupsControllerGetGroups = (session: any, query?: {
  /** Sort by field */
    sortBy?: "id" | "subject",
  /** Sort order - <b>desc</b>ending (Z => A, New first) or <b>asc</b>ending (A => Z, Old first) */
    sortOrder?: "desc" | "asc",
    limit?: number,
    offset?: number,
  /** Exclude fields */
    exclude?: ("" | "participants")[],

}, params: RequestParams = {}) =>
    this.request<object, any>({
        path: `/api/${session}/groups`,
        method: 'GET',
        query: query,                secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerJoinInfoGroup
 * @summary Get info about the group before joining.
 * @request GET:/api/{session}/groups/join-info
 * @secure
 */
groupsControllerJoinInfoGroup = (session: any, query: {
  /**
   * Group code (123) or url (https://chat.whatsapp.com/123)
   * @example "https://chat.whatsapp.com/1234567890abcdef"
   */
    code: string,

}, params: RequestParams = {}) =>
    this.request<object, any>({
        path: `/api/${session}/groups/join-info`,
        method: 'GET',
        query: query,                secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerJoinGroup
 * @summary Join group via code
 * @request POST:/api/{session}/groups/join
 * @secure
 */
groupsControllerJoinGroup = (session: any, data: JoinGroupRequest, params: RequestParams = {}) =>
    this.request<JoinGroupResponse, any>({
        path: `/api/${session}/groups/join`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetGroupsCount
 * @summary Get the number of groups.
 * @request GET:/api/{session}/groups/count
 * @secure
 */
groupsControllerGetGroupsCount = (session: any, params: RequestParams = {}) =>
    this.request<CountResponse, any>({
        path: `/api/${session}/groups/count`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerRefreshGroups
 * @summary Refresh groups from the server.
 * @request POST:/api/{session}/groups/refresh
 * @secure
 */
groupsControllerRefreshGroups = (session: any, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/refresh`,
        method: 'POST',
                        secure: true,                        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetGroup
 * @summary Get the group.
 * @request GET:/api/{session}/groups/{id}
 * @secure
 */
groupsControllerGetGroup = (session: any, id: string, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}`,
        method: 'GET',
                        secure: true,                        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerDeleteGroup
 * @summary Delete the group.
 * @request DELETE:/api/{session}/groups/{id}
 * @secure
 */
groupsControllerDeleteGroup = (session: any, id: string, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}`,
        method: 'DELETE',
                        secure: true,                        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerLeaveGroup
 * @summary Leave the group.
 * @request POST:/api/{session}/groups/{id}/leave
 * @secure
 */
groupsControllerLeaveGroup = (session: any, id: string, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/leave`,
        method: 'POST',
                        secure: true,                        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetChatPicture
 * @summary Get group picture
 * @request GET:/api/{session}/groups/{id}/picture
 * @secure
 */
groupsControllerGetChatPicture = (session: any, id: string, query?: {
  /**
   * Refresh the picture from the server (24h cache by default). Do not refresh if not needed, you can get rate limit error
   * @default false
   * @example false
   */
    refresh?: boolean,

}, params: RequestParams = {}) =>
    this.request<ChatPictureResponse, any>({
        path: `/api/${session}/groups/${id}/picture`,
        method: 'GET',
        query: query,                secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerSetPicture
 * @summary Set group picture
 * @request PUT:/api/{session}/groups/{id}/picture
 * @secure
 */
groupsControllerSetPicture = (id: string, session: any, data: ProfilePictureRequest, params: RequestParams = {}) =>
    this.request<Result, any>({
        path: `/api/${session}/groups/${id}/picture`,
        method: 'PUT',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerDeletePicture
 * @summary Delete group picture
 * @request DELETE:/api/{session}/groups/{id}/picture
 * @secure
 */
groupsControllerDeletePicture = (id: string, session: any, params: RequestParams = {}) =>
    this.request<Result, any>({
        path: `/api/${session}/groups/${id}/picture`,
        method: 'DELETE',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * @description Returns "true" if the subject was properly updated. This can return "false" if the user does not have the necessary permissions.
 *
 * @tags 👥 Groups
 * @name GroupsControllerSetDescription
 * @summary Updates the group description.
 * @request PUT:/api/{session}/groups/{id}/description
 * @secure
 */
groupsControllerSetDescription = (session: any, id: string, data: DescriptionRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/description`,
        method: 'PUT',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * @description Returns "true" if the subject was properly updated. This can return "false" if the user does not have the necessary permissions.
 *
 * @tags 👥 Groups
 * @name GroupsControllerSetSubject
 * @summary Updates the group subject
 * @request PUT:/api/{session}/groups/{id}/subject
 * @secure
 */
groupsControllerSetSubject = (session: any, id: string, data: SubjectRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/subject`,
        method: 'PUT',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * @description You can allow only admins to edit group info (title, description, photo).
 *
 * @tags 👥 Groups
 * @name GroupsControllerSetInfoAdminOnly
 * @summary Updates the group "info admin only" settings.
 * @request PUT:/api/{session}/groups/{id}/settings/security/info-admin-only
 * @secure
 */
groupsControllerSetInfoAdminOnly = (session: any, id: string, data: SettingsSecurityChangeInfo, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/settings/security/info-admin-only`,
        method: 'PUT',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * @description You can allow only admins to edit group info (title, description, photo).
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetInfoAdminOnly
 * @summary Get the group's 'info admin only' settings.
 * @request GET:/api/{session}/groups/{id}/settings/security/info-admin-only
 * @secure
 */
groupsControllerGetInfoAdminOnly = (session: any, id: string, params: RequestParams = {}) =>
    this.request<SettingsSecurityChangeInfo, any>({
        path: `/api/${session}/groups/${id}/settings/security/info-admin-only`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * @description Updates the group settings to only allow admins to send messages.
 *
 * @tags 👥 Groups
 * @name GroupsControllerSetMessagesAdminOnly
 * @summary Update settings - who can send messages
 * @request PUT:/api/{session}/groups/{id}/settings/security/messages-admin-only
 * @secure
 */
groupsControllerSetMessagesAdminOnly = (session: any, id: string, data: SettingsSecurityChangeInfo, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/settings/security/messages-admin-only`,
        method: 'PUT',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * @description The group settings to only allow admins to send messages.
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetMessagesAdminOnly
 * @summary Get settings - who can send messages
 * @request GET:/api/{session}/groups/{id}/settings/security/messages-admin-only
 * @secure
 */
groupsControllerGetMessagesAdminOnly = (session: any, id: string, params: RequestParams = {}) =>
    this.request<SettingsSecurityChangeInfo, any>({
        path: `/api/${session}/groups/${id}/settings/security/messages-admin-only`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetInviteCode
 * @summary Gets the invite code for the group.
 * @request GET:/api/{session}/groups/{id}/invite-code
 * @secure
 */
groupsControllerGetInviteCode = (session: any, id: string, params: RequestParams = {}) =>
    this.request<string, any>({
        path: `/api/${session}/groups/${id}/invite-code`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerRevokeInviteCode
 * @summary Invalidates the current group invite code and generates a new one.
 * @request POST:/api/{session}/groups/{id}/invite-code/revoke
 * @secure
 */
groupsControllerRevokeInviteCode = (session: any, id: string, params: RequestParams = {}) =>
    this.request<string, any>({
        path: `/api/${session}/groups/${id}/invite-code/revoke`,
        method: 'POST',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetParticipants
 * @summary Get participants
 * @request GET:/api/{session}/groups/{id}/participants
 * @secure
 */
groupsControllerGetParticipants = (session: any, id: string, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/participants`,
        method: 'GET',
                        secure: true,                        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerGetGroupParticipants
 * @summary Get group participants.
 * @request GET:/api/{session}/groups/{id}/participants/v2
 * @secure
 */
groupsControllerGetGroupParticipants = (session: any, id: string, params: RequestParams = {}) =>
    this.request<(GroupParticipant)[], any>({
        path: `/api/${session}/groups/${id}/participants/v2`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerAddParticipants
 * @summary Add participants
 * @request POST:/api/{session}/groups/{id}/participants/add
 * @secure
 */
groupsControllerAddParticipants = (session: any, id: string, data: ParticipantsRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/participants/add`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerRemoveParticipants
 * @summary Remove participants
 * @request POST:/api/{session}/groups/{id}/participants/remove
 * @secure
 */
groupsControllerRemoveParticipants = (session: any, id: string, data: ParticipantsRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/participants/remove`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerPromoteToAdmin
 * @summary Promote participants to admin users.
 * @request POST:/api/{session}/groups/{id}/admin/promote
 * @secure
 */
groupsControllerPromoteToAdmin = (session: any, id: string, data: ParticipantsRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/admin/promote`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
            /**
 * No description
 *
 * @tags 👥 Groups
 * @name GroupsControllerDemoteToAdmin
 * @summary Demotes participants to regular users.
 * @request POST:/api/{session}/groups/{id}/admin/demote
 * @secure
 */
groupsControllerDemoteToAdmin = (session: any, id: string, data: ParticipantsRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/groups/${id}/admin/demote`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
    }
