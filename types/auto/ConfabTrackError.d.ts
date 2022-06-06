export default ConfabTrackError;
/**
 *
 * Represents an error that occurred to a ConfabTrack. Can represent various
 * types of errors. For error descriptions (@see ConfabTrackErrors).
 *
 * @extends Error
 *
 *
 * @constructor
 * @param {Object|string} error - error object or error name
 * @param {Object|string} (options) - getUserMedia constraints object or
 * error message
 * @param {('audio'|'video'|'desktop'|'screen'|'audiooutput')[]} (devices) -
 * list of getUserMedia requested devices
 */
declare function ConfabTrackError(error: any | string, options: any, devices: any): void;
declare class ConfabTrackError {
    /**
     *
     * Represents an error that occurred to a ConfabTrack. Can represent various
     * types of errors. For error descriptions (@see ConfabTrackErrors).
     *
     * @extends Error
     *
     *
     * @constructor
     * @param {Object|string} error - error object or error name
     * @param {Object|string} (options) - getUserMedia constraints object or
     * error message
     * @param {('audio'|'video'|'desktop'|'screen'|'audiooutput')[]} (devices) -
     * list of getUserMedia requested devices
     */
    constructor(error: any | string, options: any, devices: any);
    /**
     * Additional information about original getUserMedia error
     * and constraints.
     * @type {{
     *     error: Object,
     *     constraints: Object,
     *     devices: Array.<'audio'|'video'|'desktop'|'screen'>
     * }}
     */
    gum: {
        error: any;
        constraints: any;
        devices: Array<'audio' | 'video' | 'desktop' | 'screen'>;
    };
    name: string;
    message: any;
    stack: any;
    constructor: typeof ConfabTrackError;
}
