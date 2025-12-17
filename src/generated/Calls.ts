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

export class Calls<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * No description
 *
 * @tags 📞 Calls
 * @name CallsControllerRejectCall
 * @summary Reject incoming call
 * @request POST:/api/{session}/calls/reject
 * @secure
 */
callsControllerRejectCall = (session: any, data: RejectCallRequest, params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/api/${session}/calls/reject`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    })
    }
