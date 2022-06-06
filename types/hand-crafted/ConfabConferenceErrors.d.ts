export enum ConfabConferenceErrors {
  AUTHENTICATION_REQUIRED = 'conference.authenticationRequired',
  CHAT_ERROR = 'conference.chatError',
  CONFERENCE_DESTROYED = 'conference.destroyed',
  CONFERENCE_MAX_USERS = 'conference.max_users',
  CONNECTION_ERROR = 'conference.connectionError',
  CONFERENCE_RESTARTED = 'conference.restarted',
  NOT_ALLOWED_ERROR = 'conference.connectionError.notAllowed',
  MEMBERS_ONLY_ERROR = 'conference.connectionError.membersOnly',
  CONFERENCE_ACCESS_DENIED = 'conference.connectionError.accessDenied',
  FOCUS_DISCONNECTED = 'conference.focusDisconnected',
  FOCUS_LEFT = 'conference.focusLeft',
  GRACEFUL_SHUTDOWN = 'conference.gracefulShutdown',
  ICE_FAILED = 'conference.iceFailed',
  INCOMPATIBLE_SERVER_VERSIONS = 'conference.incompatible_server_versions',
  OFFER_ANSWER_FAILED = 'conference.offerAnswerFailed',
  PASSWORD_NOT_SUPPORTED = 'conference.passwordNotSupported',
  PASSWORD_REQUIRED = 'conference.passwordRequired',
  RESERVATION_ERROR = 'conference.reservationError',
  VIDEOBRIDGE_NOT_AVAILABLE = 'conference.videobridgeNotAvailable'
}
