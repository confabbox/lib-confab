import ConfabTrack from '../RTC/ConfabTrack';

export default class Transcriber {
  start: () => void;
  stop: () => void;
  maybeMerge: () => void;
  merge: () => void;
  updateTranscription: ( word: string, name?: string ) => void;
  addTrack: ( track: ConfabTrack ) => void;
  removeTrack: ( track: ConfabTrack ) => void;
  getTranscription: () => string;
  getState: () => unknown; // TODO:
  reset: () => void;
}
