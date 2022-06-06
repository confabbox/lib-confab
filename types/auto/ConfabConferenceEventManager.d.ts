/**
 * Setups all event listeners related to conference
 * @param conference {ConfabConference} the conference
 */
export default function ConfabConferenceEventManager(conference: any): void;
export default class ConfabConferenceEventManager {
    /**
     * Setups all event listeners related to conference
     * @param conference {ConfabConference} the conference
     */
    constructor(conference: any);
    conference: any;
    xmppListeners: {};
    /**
     * Setups event listeners related to conference.chatRoom
     */
    setupChatRoomListeners(): void;
    chatRoomForwarder: EventEmitterForwarder;
    /**
     * Setups event listeners related to conference.rtc
     */
    setupRTCListeners(): void;
    /**
     * Removes event listeners related to conference.xmpp
     */
    removeXMPPListeners(): void;
    /**
     * Setups event listeners related to conference.xmpp
     */
    setupXMPPListeners(): void;
    /**
     * Add XMPP listener and save its reference for remove on leave conference.
     */
    _addConferenceXMPPListener(eventName: any, listener: any): void;
    /**
     * Setups event listeners related to conference.statistics
     */
    setupStatisticsListeners(): void;
}
import EventEmitterForwarder from "./modules/util/EventEmitterForwarder";
