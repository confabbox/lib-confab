export enum ConfabConferenceEvents {
  AUDIO_INPUT_STATE_CHANGE = 'conference.audio_input_state_changed',
  AUTH_STATUS_CHANGED = 'conference.auth_status_changed',
  BEFORE_STATISTICS_DISPOSED = 'conference.beforeStatisticsDisposed',
  CONFERENCE_ERROR = 'conference.error',
  CONFERENCE_FAILED = 'conference.failed',
  CONFERENCE_JOINED = 'conference.joined',
  CONFERENCE_LEFT = 'conference.left',
  CONFERENCE_UNIQUE_ID_SET = 'conference.unique_id_set',
  CONNECTION_ESTABLISHED = 'conference.connectionEstablished',
  CONNECTION_INTERRUPTED = 'conference.connectionInterrupted',
  CONNECTION_RESTORED = 'conference.connectionRestored',
  DATA_CHANNEL_OPENED = 'conference.dataChannelOpened',
  DISPLAY_NAME_CHANGED = 'conference.displayNameChanged',
  DOMINANT_SPEAKER_CHANGED = 'conference.dominantSpeaker',
  CONFERENCE_CREATED_TIMESTAMP = 'conference.createdTimestamp',
  DTMF_SUPPORT_CHANGED = 'conference.dtmfSupportChanged',
  ENDPOINT_MESSAGE_RECEIVED = 'conference.endpoint_message_received',
  ENDPOINT_STATS_RECEIVED = 'conference.endpoint_stats_received',
  JVB121_STATUS = 'conference.jvb121Status',
  KICKED = 'conference.kicked',
  PARTICIPANT_KICKED = 'conference.participant_kicked',
  LAST_N_ENDPOINTS_CHANGED = 'conference.lastNEndpointsChanged',
  FORWARDED_SOURCES_CHANGED = 'conference.forwardedSourcesChanged',
  LOCK_STATE_CHANGED = 'conference.lock_state_changed',
  SERVER_REGION_CHANGED = 'conference.server_region_changed',
  _MEDIA_SESSION_STARTED = 'conference.media_session.started',
  _MEDIA_SESSION_ACTIVE_CHANGED = 'conference.media_session.active_changed',
  MEMBERS_ONLY_CHANGED = 'conference.membersOnlyChanged',
  MESSAGE_RECEIVED = 'conference.messageReceived',
  NO_AUDIO_INPUT = 'conference.no_audio_input',
  NOISY_MIC = 'conference.noisy_mic',
  NON_PARTICIPANT_MESSAGE_RECEIVED = 'conference.non_participant_message_received',
  PRIVATE_MESSAGE_RECEIVED = 'conference.privateMessageReceived',
  PARTICIPANT_CONN_STATUS_CHANGED = 'conference.participant_conn_status_changed',
  PARTCIPANT_FEATURES_CHANGED = 'conference.partcipant_features_changed',
  PARTICIPANT_PROPERTY_CHANGED = 'conference.participant_property_changed',
  P2P_STATUS = 'conference.p2pStatus',
  PHONE_NUMBER_CHANGED = 'conference.phoneNumberChanged',
  PROPERTIES_CHANGED = 'conference.propertiesChanged',
  RECORDER_STATE_CHANGED = 'conference.recorderStateChanged',
  VIDEO_SIP_GW_AVAILABILITY_CHANGED = 'conference.videoSIPGWAvailabilityChanged',
  VIDEO_SIP_GW_SESSION_STATE_CHANGED = 'conference.videoSIPGWSessionStateChanged',
  START_MUTED_POLICY_CHANGED = 'conference.start_muted_policy_changed',
  STARTED_MUTED = 'conference.started_muted',
  SUBJECT_CHANGED = 'conference.subjectChanged',
  SUSPEND_DETECTED = 'conference.suspendDetected',
  TALK_WHILE_MUTED = 'conference.talk_while_muted',
  TRACK_ADDED = 'conference.trackAdded',
  TRACK_AUDIO_LEVEL_CHANGED = 'conference.audioLevelsChanged',
  TRACK_MUTE_CHANGED = 'conference.trackMuteChanged',
  TRACK_REMOVED = 'conference.trackRemoved',
  TRANSCRIPTION_STATUS_CHANGED = 'conference.transcriptionStatusChanged',
  USER_JOINED = 'conference.userJoined',
  USER_LEFT = 'conference.userLeft',
  USER_ROLE_CHANGED = 'conference.roleChanged',
  USER_STATUS_CHANGED = 'conference.statusChanged',
  BOT_TYPE_CHANGED = 'conference.bot_type_changed',
  LOBBY_USER_JOINED = 'conference.lobby.userJoined',
  LOBBY_USER_UPDATED = 'conference.lobby.userUpdated',
  LOBBY_USER_LEFT = 'conference.lobby.userLeft'
}
