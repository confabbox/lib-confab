import Logger from 'logger';
import ConfabConnection from './ConfabConnection';
import ConfabMediaDevices from './ConfabMediaDevices';
import { ConfabConferenceErrors } from './ConfabConferenceErrors';
import { ConfabConnectionErrors } from './ConfabConnectionErrors';
import { ConfabTrackErrors } from './ConfabTrackErrors';
import { ConfabLogLevels } from './ConfabLogLevels';
import { ConfabMediaDevicesEvents } from './ConfabMediaDevicesEvents';
import { ConfabTrackEvents } from './ConfabTrackEvents';
import { ConfabConnectionEvents } from './ConfabConnectionEvents';
import { ConfabConferenceEvents } from './ConfabConferenceEvents';
import { ConfabTranscriptionStatus } from './ConfabTranscriptionStatus';
import BrowserCapabilities from './modules/browser/BrowserCapabilities';
import { ParticipantConnectionStatus } from './modules/connectivity/ParticipantConnectionStatus';
import { DetectionEvents } from './modules/detection/DetectionEvents';
import TrackVADEmitter, { VADProcessor } from './modules/detection/TrackVADEmitter';
import RecordingConstants from './modules/recording/recordingConstants';
import ConfabLocalTrack from './modules/RTC/ConfabLocalTrack';
import PrecallTest from './modules/statistics/PrecallTest';
import AuthUtil from './modules/util/AuthUtil';
import ScriptUtil from './modules/util/ScriptUtil';
import { VideoSIPGWConstants } from './modules/videosipgw/VideoSIPGWConstants';
import AudioMixer from './modules/webaudio/AudioMixer';
import { ConnectionQualityEvents } from './service/connectivity/ConnectionQualityEvents';
import { E2ePingEvents } from './service/e2eping/E2ePingEvents';

export type CreateLocalTracksOptions = {
  effects?: Array<unknown>; // TODO: work out what unknown is
  devices?: Array<string>;
  resolution?: string;
  cameraDeviceId?: string;
  micDeviceId?: string;
  interval?: number;
  checkAgain?: () => boolean;
  listener?: () => void;
  frameRate?: {
    min?: string,
    max?: string,
  },
  desktopSharingFrameRate?: {
    min?: string,
    max?: string,
  },
  constraints?: any // TODO: figure out this type
}

export type InitOptions = {
  disableAudioLevels?: boolean,
  useIPv6?: unknown,
  disableSimulcast?: unknown,
  enableWindowOnErrorHandler?: unknown,
  disableThirdPartyRequests?: unknown,
  enableAnalyticsLogging?: unknown,
  externalStorage?: unknown,
  callStatsCustomScriptUrl?: unknown,
  disableRtx?: unknown,
  disabledCodec?: unknown,
  preferredCodec?: unknown,
  useTurnUdp?: unknown
}

export type ConfabMeetJSType = {
  version: string;

  ConfabConnection: typeof ConfabConnection;

  ProxyConnectionService: unknown; // TODO:

  //USER_MEDIA_SLOW_PROMISE_TIMEOUT: 1000;

  constants: {
    participantConnectionStatus: typeof ParticipantConnectionStatus,
    recording: typeof RecordingConstants,
    sipVideoGW: typeof VideoSIPGWConstants,
    transcriptionStatus: typeof ConfabTranscriptionStatus,
  };

  events: {
    conference: typeof ConfabConferenceEvents,
    connection: typeof ConfabConnectionEvents,
    detection: typeof DetectionEvents,
    track: typeof ConfabTrackEvents,
    mediaDevices: typeof ConfabMediaDevicesEvents,
    connectionQuality: typeof ConnectionQualityEvents,
    e2eping: typeof E2ePingEvents
  };

  errors: {
    conference: typeof ConfabConferenceErrors,
    connection: typeof ConfabConnectionErrors,
    track: typeof ConfabTrackErrors
  };

  errorTypes: {
    ConfabTrackError: unknown // TODO:
  };

  logLevels: typeof ConfabLogLevels; // TODO: code refers to Logger.levels and that is in logger

  mediaDevices: typeof ConfabMediaDevices;

  analytics: unknown; // TODO: code referes to Statistics.analytics which comes from modules/statstics/AnalyticsAdapter.js

  init: ( options: InitOptions ) => unknown; // TODO:

  isDesktopSharingEnabled: () => boolean;

  isWebRtcSupported: () => boolean;

  setLogLevel: ( level: Logger.levels ) => void;

  setLogLevelById: ( level: Logger.levels, id: unknown ) => void; // TODO:

  addGlobalLogTransport: ( globalTransport: unknown ) => void; // TODO:

  removeGlobalLogTransport: ( globalTransport: unknown ) => void; // TODO:

  setGlobalLogOptions: ( options: unknown ) => void; // TODO:

  createLocalTracks: ( options: CreateLocalTracksOptions, firePermissionPromptIsShownEvent?: boolean, originalOptions?: CreateLocalTracksOptions ) => Promise<Array<ConfabLocalTrack> | ConfabConferenceErrors>; // TODO:

  createTrackVADEmitter: ( localAudioDeviceId: string, sampleRate: 256 | 512 | 1024 | 4096 | 8192 | 16384, vadProcessor: VADProcessor ) => Promise<TrackVADEmitter>;

  createAudioMixer: () => AudioMixer;

  getActiveAudioDevice: () => Promise<Object>; // TODO: can we improve on object?

  // isDeviceListAvailable: () => boolean; // obsosete

  // isDeviceChangeAvailable: ( deviceType: string ) => boolean; // obsosete

  isMultipleAudioInputSupported: () => boolean;

  isCollectingLocalStats: () => boolean;

  enumerateDevices: ( callback: ( availableDevices: MediaDeviceInfo[] ) => void ) => void;

  getGlobalOnErrorHandler: ( message: string, source: string, lineno?: number, colno?: number, error?: Error ) => void;

  setNetworkInfo: ( { isOnline: boolean } ) => void;

  setVideoTrackContentHints: ( track: MediaStreamTrack, hint: string ) => void;

  precallTest: PrecallTest;

  util: {
    AuthUtil: { getTokenAuthUrl: typeof AuthUtil.getTokenAuthUrl },
    ScriptUtil: { loadScript: typeof ScriptUtil.loadScript },
    browser: BrowserCapabilities
  }
}

declare var _default: ConfabMeetJSType;
export default _default;
