import ConfabTrack from './ConfabTrack';
import RTC from './RTC';
import ConfabConference from '../../ConfabConference';

export default class ConfabRemoteTrack extends ConfabTrack {
  constructor(rtc: RTC, conference: ConfabConference, ownerEndpointId: string, stream: MediaStream, track: MediaStreamTrack, mediaType: any, videoType: any, ssrc: number, muted: boolean, isP2P: boolean);
  setMute: ( value: boolean ) => void;
  isMuted: () => boolean;
  getParticipantId: () => string;
  isLocal: () => false;
  getSSRC: () => number;
  toString: () => string;
  getSourceName: () => string;
  getTrackStreamingStatus: () => string;
  _setTrackStreamingStatus: (newStatus: string) => void;
  _clearEnteredForwardedSourcesTimestamp: () => void;
  _setEnteredForwardedSourcesTimestamp: (timestamp: number) => void;
  _getEnteredForwardedSourcesTimestamp: () => number | null;

  containerEvents: [ 'abort', 'canplay', 'canplaythrough', 'emptied', 'ended', 'error', 'loadeddata',
    'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'ratechange', 'stalled', 'suspend',
    'waiting' ]; // TODO: this might be private
}
