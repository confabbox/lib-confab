/**
 * The errors for the conference.
 */
export var ConfabConferenceErrors;
(function (ConfabConferenceErrors) {
    /**
     * Indicates that client must be authenticated to create the conference.
     */
    ConfabConferenceErrors["AUTHENTICATION_REQUIRED"] = "conference.authenticationRequired";
    /**
     * Indicates that chat error occurred.
     */
    ConfabConferenceErrors["CHAT_ERROR"] = "conference.chatError";
    /**
     * Indicates that a settings error occurred.
     */
    ConfabConferenceErrors["SETTINGS_ERROR"] = "conference.settingsError";
    /**
     * Indicates that conference has been destroyed.
     */
    ConfabConferenceErrors["CONFERENCE_DESTROYED"] = "conference.destroyed";
    /**
     * Indicates that max users limit has been reached.
     */
    ConfabConferenceErrors["CONFERENCE_MAX_USERS"] = "conference.max_users";
    /**
     * Indicates that a connection error occurred when trying to join a conference.
     */
    ConfabConferenceErrors["CONNECTION_ERROR"] = "conference.connectionError";
    /**
     * Indicates that the client has been forced to restart by jicofo when the
     * conference was migrated from one bridge to another.
     */
    ConfabConferenceErrors["CONFERENCE_RESTARTED"] = "conference.restarted";
    /**
     * Indicates that a connection error is due to not allowed,
     * occurred when trying to join a conference.
     */
    ConfabConferenceErrors["NOT_ALLOWED_ERROR"] = "conference.connectionError.notAllowed";
    /**
     * Indicates that a connection error is due to not allowed,
     * occurred when trying to join a conference, only approved members are allowed to join.
     */
    ConfabConferenceErrors["MEMBERS_ONLY_ERROR"] = "conference.connectionError.membersOnly";
    /**
     * Indicates that a connection error is due to denied access to the room,
     * occurred after joining a lobby room and access is denied by the room moderators.
     */
    ConfabConferenceErrors["CONFERENCE_ACCESS_DENIED"] = "conference.connectionError.accessDenied";
    /**
     * Indicates that focus error happened.
     */
    ConfabConferenceErrors["FOCUS_DISCONNECTED"] = "conference.focusDisconnected";
    /**
     * Indicates that focus left the conference.
     */
    ConfabConferenceErrors["FOCUS_LEFT"] = "conference.focusLeft";
    /**
     * Indicates that graceful shutdown happened.
     */
    ConfabConferenceErrors["GRACEFUL_SHUTDOWN"] = "conference.gracefulShutdown";
    /**
     * Indicates that the media connection has failed.
     */
    ConfabConferenceErrors["ICE_FAILED"] = "conference.iceFailed";
    /**
     * Indicates that the versions of the server side components are incompatible
     * with the client side.
     */
    ConfabConferenceErrors["INCOMPATIBLE_SERVER_VERSIONS"] = "conference.incompatible_server_versions";
    /**
     * Indicates that offer/answer had failed.
     */
    ConfabConferenceErrors["OFFER_ANSWER_FAILED"] = "conference.offerAnswerFailed";
    /**
     * Indicates that password cannot be set for this conference.
     */
    ConfabConferenceErrors["PASSWORD_NOT_SUPPORTED"] = "conference.passwordNotSupported";
    /**
     * Indicates that a password is required in order to join the conference.
     */
    ConfabConferenceErrors["PASSWORD_REQUIRED"] = "conference.passwordRequired";
    /**
     * Indicates that reservation system returned error.
     */
    ConfabConferenceErrors["RESERVATION_ERROR"] = "conference.reservationError";
    /**
     * Indicates that there is no available videobridge.
     */
    ConfabConferenceErrors["VIDEOBRIDGE_NOT_AVAILABLE"] = "conference.videobridgeNotAvailable";
})(ConfabConferenceErrors || (ConfabConferenceErrors = {}));
;
// exported for backward compatibility
export const AUTHENTICATION_REQUIRED = ConfabConferenceErrors.AUTHENTICATION_REQUIRED;
export const CHAT_ERROR = ConfabConferenceErrors.CHAT_ERROR;
export const SETTINGS_ERROR = ConfabConferenceErrors.SETTINGS_ERROR;
export const CONFERENCE_DESTROYED = ConfabConferenceErrors.CONFERENCE_DESTROYED;
export const CONFERENCE_MAX_USERS = ConfabConferenceErrors.CONFERENCE_MAX_USERS;
export const CONNECTION_ERROR = ConfabConferenceErrors.CONNECTION_ERROR;
export const CONFERENCE_RESTARTED = ConfabConferenceErrors.CONFERENCE_RESTARTED;
export const NOT_ALLOWED_ERROR = ConfabConferenceErrors.NOT_ALLOWED_ERROR;
export const MEMBERS_ONLY_ERROR = ConfabConferenceErrors.MEMBERS_ONLY_ERROR;
export const CONFERENCE_ACCESS_DENIED = ConfabConferenceErrors.CONFERENCE_ACCESS_DENIED;
export const FOCUS_DISCONNECTED = ConfabConferenceErrors.FOCUS_DISCONNECTED;
export const FOCUS_LEFT = ConfabConferenceErrors.FOCUS_LEFT;
export const GRACEFUL_SHUTDOWN = ConfabConferenceErrors.GRACEFUL_SHUTDOWN;
export const ICE_FAILED = ConfabConferenceErrors.ICE_FAILED;
export const INCOMPATIBLE_SERVER_VERSIONS = ConfabConferenceErrors.INCOMPATIBLE_SERVER_VERSIONS;
export const OFFER_ANSWER_FAILED = ConfabConferenceErrors.OFFER_ANSWER_FAILED;
export const PASSWORD_NOT_SUPPORTED = ConfabConferenceErrors.PASSWORD_NOT_SUPPORTED;
export const PASSWORD_REQUIRED = ConfabConferenceErrors.PASSWORD_REQUIRED;
export const RESERVATION_ERROR = ConfabConferenceErrors.RESERVATION_ERROR;
export const VIDEOBRIDGE_NOT_AVAILABLE = ConfabConferenceErrors.VIDEOBRIDGE_NOT_AVAILABLE;
//# sourceMappingURL=ConfabConferenceErrors.js.map