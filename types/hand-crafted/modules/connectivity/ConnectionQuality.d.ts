import ConfabConference from '../../ConfabConference';
import EventEmitter from '../../EventEmitter';
import { ConnectionQualityEvents } from '../../service/connectivity/ConnectionQualityEvents';

export default class ConnectionQuality {
  constructor( conference: ConfabConference, eventEmitter: EventEmitter<ConnectionQualityEvents>, options: { config: { startBitrate: number; } } );
  getTarget: ( simulcast: boolean, resolution: Resolution, millisSinceStart: number, videoQualitySettings: unknown ) => number; // TODO:
  getStats: () => unknown; // TODO:
}
