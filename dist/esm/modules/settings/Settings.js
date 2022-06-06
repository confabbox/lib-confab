import { confabLocalStorage } from 'js-utils';
import { getLogger } from 'logger';
const logger = getLogger(__filename);
import UsernameGenerator from '../util/UsernameGenerator';
let _callStatsUserName;
let _machineId;
/**
 *
 */
export default {
    /**
     * The storage used to store the settings.
     */
    _storage: confabLocalStorage,
    /**
     * Initializes the Settings class.
     *
     * @param {Storage|undefined} externalStorage - Object that implements the Storage interface. This object will be
     * used for storing data instead of confabLocalStorage if specified.
     */
    init(externalStorage) {
        this._storage = externalStorage || confabLocalStorage;
    },
    /**
     * Returns fake username for callstats
     * @returns {string} fake username for callstats
     */
    get callStatsUserName() {
        if (!_callStatsUserName) {
            _callStatsUserName = this._storage.getItem('callStatsUserName');
            if (!_callStatsUserName) {
                _callStatsUserName = generateCallStatsUserName();
                this._storage.setItem('callStatsUserName', _callStatsUserName);
            }
        }
        return _callStatsUserName;
    },
    /**
     * Returns current machine id.
     * @returns {string} machine id
     */
    get machineId() {
        if (!_machineId) {
            const amDid = this._storage.getItem('billingId');
            _machineId = amDid || this._storage.getItem('confabMeetId');
            if (amDid) {
                this._storage.setItem('confabMeetId', amDid);
            }
            else if (!_machineId) {
                _machineId = generateConfabMeetId();
                this._storage.setItem('confabMeetId', _machineId);
            }
        }
        return _machineId;
    },
    /**
     * Returns current session id.
     * @returns {string} current session id
     */
    get sessionId() {
        // We may update sessionId in localStorage from another ConfabConference
        // instance and that's why we should always re-read it.
        return this._storage.getItem('sessionId');
    },
    /**
     * Save current session id.
     * @param {string} sessionId session id
     */
    set sessionId(sessionId) {
        if (sessionId) {
            this._storage.setItem('sessionId', sessionId);
        }
        else {
            this._storage.removeItem('sessionId');
        }
    }
};
/**
 * Generate fake username for callstats.
 * @returns {string} fake random username
 */
function generateCallStatsUserName() {
    const username = UsernameGenerator.generateUsername();
    logger.log('generated callstats uid', username);
    return username;
}
/**
 * Generate unique id.
 * @returns {string} random unique id
 */
function generateConfabMeetId() {
    const confabMeetId = generateUniqueId();
    logger.log('generated id', confabMeetId);
    return confabMeetId;
}
/**
 *
 */
function generateUniqueId() {
    return _p8() + _p8() + _p8() + _p8();
}
/**
 *
 */
function _p8() {
    return `${Math.random().toString(16)}000000000`.substr(2, 8);
}
//# sourceMappingURL=Settings.js.map