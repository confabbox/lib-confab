import ConfabConference from '../../ConfabConference';
import Listenable from '../util/Listenable';

export class OlmAdapter extends Listenable {
  constructor( conference: ConfabConference );
  initSessions: () => Promise<unknown>; // TODO:
  static isSupported: () => boolean;
  updateCurrentKey: ( key: Uint8Array | boolean ) => number;
  clearParticipantSession: ( participant: unknown ) => void; // TODO:
  clearAllParticipantsSessions: () => void;
  updateKey: ( key: Uint8Array | boolean ) => Promise<number>;
}
