
import Listenable from '../../modules/util/Listenable';
import { MediaType } from '../../service/RTC/MediaType';

/**
 * @typedef {string} EndpointId
 */
/**
 * @typedef {string} SourceName
 */
/**
 * @typedef {Object} SourceInfo
 *
 * @property {SourceName} sourceName - Name of the media source.
 * @property {boolean} [muted=false] - Tells if the source is muted (paused?).
 * @property {string} [videoType] - Type of the video for video type.
 */

/**
 * Generates a source name.
 *
 * @param {EndpointId} endpointId - Confab Endpoint Id.
 * @param {MediaType} mediaType - the media type string.
 * @param {number} trackIdx - Track index (or sender idx? - to be figured out) starting from 0.
 * @returns {SourceName} eg. endpointA-v0
 */
export function getSourceNameForConfabTrack(endpointId, mediaType, trackIdx) {
    const firstLetterOfMediaType = mediaType.substring(0, 1);

    return `${endpointId}-${firstLetterOfMediaType}${trackIdx}`;
}

/**
 * Extracts MediaType from give source name (must be in the correct format as generated by
 * {@link getSourceNameForConfabTrack}).
 *
 * @param {SourceName} sourceName - the source name.
 * @returns {MediaType}
 */
export function getMediaTypeFromSourceName(sourceName) {
    const firstLetterOfMediaTypeIdx = sourceName.indexOf('-') + 1;

    if (firstLetterOfMediaTypeIdx <= 0) {
        throw new Error(`Invalid source name: ${sourceName}`);
    }

    const firstLetterOfMediaType = sourceName.substr(firstLetterOfMediaTypeIdx, 1);

    for (const type of Object.values(MediaType)) {
        if (type.substr(0, 1) === firstLetterOfMediaType) {
            return type;
        }
    }

    throw new Error(`Invalid source name: ${sourceName}`);
}

/**
 * An object that carries the info about specific media type advertised by
 * participant in the signaling channel.
 * @typedef {Object} PeerMediaInfo
 * @property {boolean} muted indicates if the media is currently muted
 * @property {VideoType|undefined} videoType the type of the video if applicable
 */

/**
 * Interface used to expose the information carried over the signaling channel
 * which is not available to the RTC module in the media SDP.
 *
 * @interface SignalingLayer
 */
export default class SignalingLayer extends Listenable {

    /**
     * Obtains the endpoint ID for given SSRC.
     * @param {number} ssrc the SSRC number.
     * @return {string|null} the endpoint ID for given media SSRC.
     */
    getSSRCOwner(ssrc) { // eslint-disable-line no-unused-vars
        throw new Error('not implemented');
    }

    /**
     * Obtains the info about given media advertised in the MUC presence of
     * the participant identified by the given MUC JID.
     * @param {string} owner the MUC jid of the participant for whom
     * {@link PeerMediaInfo} will be obtained.
     * @param {MediaType} mediaType the type of the media for which presence
     * info will be obtained.
     * @return {PeerMediaInfo|null} presenceInfo an object with media presence
     * info or <tt>null</tt> either if there is no presence available for given
     * JID or if the media type given is invalid.
     *
     * @deprecated This method is to be replaced with getPeerSourceInfo.
     */
    getPeerMediaInfo(owner, mediaType) { // eslint-disable-line no-unused-vars
        throw new Error('not implemented');
    }

    /**
     * Obtains the info about a source for given name and endpoint ID.
     * @param {EndpointId} owner - The owner's endpoint ID.
     * @param {SourceName} sourceName - The name of the source for which the info is to be obtained.
     * @returns {SourceInfo | undefined}
     */
    getPeerSourceInfo(owner, sourceName) { // eslint-disable-line no-unused-vars
        throw new Error('not implemented');
    }

    /**
     * Obtains the source name for given SSRC.
     * @param {number} ssrc the track's SSRC identifier.
     * @returns {SourceName | undefined} the track's source name.
     */
    getTrackSourceName(ssrc) { // eslint-disable-line no-unused-vars
        throw new Error('not implemented');
    }
}
