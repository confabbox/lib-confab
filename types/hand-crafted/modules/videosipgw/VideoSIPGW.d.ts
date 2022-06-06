import { VideoSIPGWConstants } from './VideoSIPGWConstants';
import ConfabVideoSIPGWSession from './ConfabVideoSIPGWSession';
import ChatRoom from '../xmpp/ChatRoom';

declare class VideoSIPGW {
  constructor( chatRoom: ChatRoom );
  handleJibriSIPState: ( node: { attributes?: { state?: VideoSIPGWConstants, sipaddress?: string, failure_reason?: string } } ) => void;
  createVideoSIPGWSession: ( sipAddress: string, displayName: string ) => ConfabVideoSIPGWSession | Error;
  sessionStateChanged: ( event: { address: string, oldState: VideoSIPGWConstants, newState: VideoSIPGWConstants, displayName: string } ) => void;
}
