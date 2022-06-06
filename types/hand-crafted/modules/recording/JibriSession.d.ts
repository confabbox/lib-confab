import ConfabParticipant from '../../ConfabParticipant';
import Jibri from './recordingConstants';

export default class JibriSession {
  constructor( options?: {
    connection: unknown, // TODO:
    mode: unknown, // TODO:
    sessionID: unknown, // TODO:
    status: unknown // TODO:
  } );
  getError: () => Jibri.error | undefined;
  getID: () => string | undefined;
  getInitiator: () => ConfabParticipant | string;
  getLiveStreamViewURL: () => string | undefined;
  getStatus: () => Jibri.status | undefined;
  getTerminator: () => ConfabParticipant | string;
  getMode: () => Jibri.mode;
  setError: ( error: Jibri.error ) => void;
  setLiveStreamViewURL: ( url: string ) => void;
  setStatus: ( status: Jibri.status ) => void;
  setInitiator: ( participant: ConfabParticipant | string ) => void;
  setTerminator: ( participant: ConfabParticipant | string ) => void;
}
