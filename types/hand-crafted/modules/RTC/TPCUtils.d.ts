import ConfabLocalTrack from './ConfabLocalTrack';
import { MediaType } from '../../service/RTC/MediaType';

export const SIM_LAYER_RIDS: string[];

export default class TPCUtils {
  constructor(peerconnection: unknown, videoBitrates: unknown); // TODO:
  ensureCorrectOrderOfSsrcs: ( description: unknown ) => RTCSessionDescription; // TODO:
  insertUnifiedPlanSimulcastReceive: ( desc: { type: string, sdp: string } ) => RTCSessionDescription;
  addTrack: ( localTrack: ConfabLocalTrack, isInitiator: boolean ) => void;
  addTrackUnmute: ( localTrack: ConfabLocalTrack ) => Promise<void>;
  getLocalStreamHeightConstraints: ( localTrack: ConfabLocalTrack ) => number[];
  removeTrackMute: ( localTrack: ConfabLocalTrack ) => Promise<void>;
  replaceTrack: ( oldTrack: ConfabLocalTrack, newTrack: ConfabLocalTrack ) => Promise<void>;
  setAudioTransferActive: ( active: boolean ) => void;
  setEncodings: ( track: ConfabLocalTrack ) => Promise<void>;
  setMediaTransferActive: ( mediaType: MediaType, active: boolean ) => void;
  setVideoTransferActive: ( active: boolean ) => void;
  updateEncodingsResolution: ( parameters: RTCRtpEncodingParameters ) => void;
}
