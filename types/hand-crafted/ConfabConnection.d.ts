import ConfabConference from './ConfabConference';
import { ConfabConnectionEvents } from './ConfabConnectionEvents';

export type ConfabConferenceOptions = {
  // TODO:
}

export default class ConfabConnection {
  constructor( appID?: string, token?: unknown, options?: ConfabConferenceOptions );
  connect: ( options: unknown ) => void; // TODO:
  attach: ( options: unknown ) => void; // TODO:
  disconnect: ( ...args: unknown[] ) => Promise<unknown>; // TODO:
  getJid: () => string;
  setToken: ( token: unknown ) => void;
  initConfabConference: ( name: string, options: ConfabConferenceOptions ) => ConfabConference;
  addEventListener: ( event: ConfabConnectionEvents, listener: unknown ) => void; // TODO:
  removeEventListener: ( event: ConfabConnectionEvents, listener: unknown ) => void; // TODO:
  getConnectionTimes: () => number; // TODO: check
  addFeature: ( feature: string, submit?: boolean ) => void;
  removeFeature: ( feature: string, submit?: boolean ) => void;
  getLogs: () => unknown | { metadata: { time: Date, url: string, ua: string, xmpp?: unknown } }; // TODO:
}
