import ConfabConference from '../../ConfabConference';
import RTC from '../RTC/RTC';
import ConfabRemoteTrack from '../RTC/ConfabRemoteTrack';
import ConfabParticipant from '../../ConfabParticipant';
import { VideoType } from '../../service/RTC/VideoType';

export enum ParticipantConnectionStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  INTERRUPTED = 'interrupted',
  RESTORING = 'restoring'
}

export default class ParticipantConnectionStatusHandler {
  constructor( rtc: RTC, conference: ConfabConference, options: { rtcMuteTimeout: number, outOfLastNTimeout: number } );
  init: () => void;
  dispose: () => void;
  onEndpointConnStatusChanged: ( endpointId: string, isActive: boolean ) => void;
  clearTimeout: ( participantId: string ) => void;
  clearRtcMutedTimestamp: ( participantId: string ) => void;
  onRemoteTrackAdded: ( remoteTrack: ConfabRemoteTrack ) => void;
  onRemoteTrackRemoved: ( remoteTrack: ConfabRemoteTrack ) => void;
  isVideoTrackFrozen: ( participant: ConfabParticipant ) => boolean;
  refreshConnectionStatusForAll: () => void;
  figureOutConnectionStatus: ( id: string ) => void;
  maybeSendParticipantConnectionStatusEvent: ( id: string, nowMs: number ) => void;
  onUserLeft: ( id: string ) => void;
  onTrackRtcMuted: ( track: ConfabRemoteTrack ) => void;
  onTrackRtcUnmuted: ( track: ConfabRemoteTrack ) => void;
  onSignallingMuteChanged: ( track: ConfabRemoteTrack ) => void;
  onTrackVideoTypeChanged: ( track: ConfabRemoteTrack, type: VideoType ) => void;
}