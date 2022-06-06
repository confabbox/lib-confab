/**
 * The errors for the conference.
 */
export declare enum ConfabConferenceErrors {
    /**
     * Indicates that client must be authenticated to create the conference.
     */
    AUTHENTICATION_REQUIRED = "conference.authenticationRequired",
    /**
     * Indicates that chat error occurred.
     */
    CHAT_ERROR = "conference.chatError",
    /**
     * Indicates that a settings error occurred.
     */
    SETTINGS_ERROR = "conference.settingsError",
    /**
     * Indicates that conference has been destroyed.
     */
    CONFERENCE_DESTROYED = "conference.destroyed",
    /**
     * Indicates that max users limit has been reached.
     */
    CONFERENCE_MAX_USERS = "conference.max_users",
    /**
     * Indicates that a connection error occurred when trying to join a conference.
     */
    CONNECTION_ERROR = "conference.connectionError",
    /**
     * Indicates that the client has been forced to restart by jicofo when the
     * conference was migrated from one bridge to another.
     */
    CONFERENCE_RESTARTED = "conference.restarted",
    /**
     * Indicates that a connection error is due to not allowed,
     * occurred when trying to join a conference.
     */
    NOT_ALLOWED_ERROR = "conference.connectionError.notAllowed",
    /**
     * Indicates that a connection error is due to not allowed,
     * occurred when trying to join a conference, only approved members are allowed to join.
     */
    MEMBERS_ONLY_ERROR = "conference.connectionError.membersOnly",
    /**
     * Indicates that a connection error is due to denied access to the room,
     * occurred after joining a lobby room and access is denied by the room moderators.
     */
    CONFERENCE_ACCESS_DENIED = "conference.connectionError.accessDenied",
    /**
     * Indicates that focus error happened.
     */
    FOCUS_DISCONNECTED = "conference.focusDisconnected",
    /**
     * Indicates that focus left the conference.
     */
    FOCUS_LEFT = "conference.focusLeft",
    /**
     * Indicates that graceful shutdown happened.
     */
    GRACEFUL_SHUTDOWN = "conference.gracefulShutdown",
    /**
     * Indicates that the media connection has failed.
     */
    ICE_FAILED = "conference.iceFailed",
    /**
     * Indicates that the versions of the server side components are incompatible
     * with the client side.
     */
    INCOMPATIBLE_SERVER_VERSIONS = "conference.incompatible_server_versions",
    /**
     * Indicates that offer/answer had failed.
     */
    OFFER_ANSWER_FAILED = "conference.offerAnswerFailed",
    /**
     * Indicates that password cannot be set for this conference.
     */
    PASSWORD_NOT_SUPPORTED = "conference.passwordNotSupported",
    /**
     * Indicates that a password is required in order to join the conference.
     */
    PASSWORD_REQUIRED = "conference.passwordRequired",
    /**
     * Indicates that reservation system returned error.
     */
    RESERVATION_ERROR = "conference.reservationError",
    /**
     * Indicates that there is no available videobridge.
     */
    VIDEOBRIDGE_NOT_AVAILABLE = "conference.videobridgeNotAvailable"
}
export declare const AUTHENTICATION_REQUIRED = ConfabConferenceErrors.AUTHENTICATION_REQUIRED;
export declare const CHAT_ERROR = ConfabConferenceErrors.CHAT_ERROR;
export declare const SETTINGS_ERROR = ConfabConferenceErrors.SETTINGS_ERROR;
export declare const CONFERENCE_DESTROYED = ConfabConferenceErrors.CONFERENCE_DESTROYED;
export declare const CONFERENCE_MAX_USERS = ConfabConferenceErrors.CONFERENCE_MAX_USERS;
export declare const CONNECTION_ERROR = ConfabConferenceErrors.CONNECTION_ERROR;
export declare const CONFERENCE_RESTARTED = ConfabConferenceErrors.CONFERENCE_RESTARTED;
export declare const NOT_ALLOWED_ERROR = ConfabConferenceErrors.NOT_ALLOWED_ERROR;
export declare const MEMBERS_ONLY_ERROR = ConfabConferenceErrors.MEMBERS_ONLY_ERROR;
export declare const CONFERENCE_ACCESS_DENIED = ConfabConferenceErrors.CONFERENCE_ACCESS_DENIED;
export declare const FOCUS_DISCONNECTED = ConfabConferenceErrors.FOCUS_DISCONNECTED;
export declare const FOCUS_LEFT = ConfabConferenceErrors.FOCUS_LEFT;
export declare const GRACEFUL_SHUTDOWN = ConfabConferenceErrors.GRACEFUL_SHUTDOWN;
export declare const ICE_FAILED = ConfabConferenceErrors.ICE_FAILED;
export declare const INCOMPATIBLE_SERVER_VERSIONS = ConfabConferenceErrors.INCOMPATIBLE_SERVER_VERSIONS;
export declare const OFFER_ANSWER_FAILED = ConfabConferenceErrors.OFFER_ANSWER_FAILED;
export declare const PASSWORD_NOT_SUPPORTED = ConfabConferenceErrors.PASSWORD_NOT_SUPPORTED;
export declare const PASSWORD_REQUIRED = ConfabConferenceErrors.PASSWORD_REQUIRED;
export declare const RESERVATION_ERROR = ConfabConferenceErrors.RESERVATION_ERROR;
export declare const VIDEOBRIDGE_NOT_AVAILABLE = ConfabConferenceErrors.VIDEOBRIDGE_NOT_AVAILABLE;
