import ConfabConference from '../../ConfabConference';
import ConfabTrack from '../RTC/ConfabTrack';

export class AudioRecorder {
  constructor( confabConference: ConfabConference );
  determineCorrectFileType: unknown; // TODO:
  addTrack: ( track: ConfabTrack ) => void;
  instantiateTrackRecorder: ( track: ConfabTrack ) => void;
  removeTrack: ( track: ConfabTrack ) => void;
  updateNames: () => void;
  start: () => void;
  stop: () => void;
  download: () => void;
  getRecordingResults: () => Array<unknown>; // TODO:
  getFileType: () => string;
}
