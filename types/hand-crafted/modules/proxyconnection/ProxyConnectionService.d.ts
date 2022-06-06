import ConfabConnection from '../../ConfabConnection';
import ConfabLocalTrack from '../RTC/ConfabLocalTrack';

export default class ProxyConnectionService {
  constructor( options: {
    convertVideoToDesktop: boolean,
    iceConfig: unknown, // TODO:
    confabConnection: ConfabConnection,
    onRemoteStream: ( params: unknown ) => unknown, // TODO:
    onSendMessage: ( params: unknown ) => unknown // TODO:
  } );
  processMessage: ( message: { data: { iq: string }, from: string } ) => void;
  start: ( peerJid: string, localTracks?: ConfabLocalTrack[] ) => void;
  stop: () => void;
}
