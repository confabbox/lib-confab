export var ConfabTrackEvents;
(function (ConfabTrackEvents) {
    /**
     * The media track was removed to the conference.
     */
    ConfabTrackEvents["LOCAL_TRACK_STOPPED"] = "track.stopped";
    /**
     * Audio levels of a this track was changed.
     * The first argument is a number with audio level value in range [0, 1].
     * The second argument is a <tt>TraceablePeerConnection</tt> which is the peer
     * connection which measured the audio level (one audio track can be added
     * to multiple peer connection at the same time). This argument is optional for
     * local tracks for which we can measure audio level without the peer
     * connection (the value will be <tt>undefined</tt>).
     *
     * NOTE The second argument should be treated as library internal and can be
     * removed at any time.
     */
    ConfabTrackEvents["TRACK_AUDIO_LEVEL_CHANGED"] = "track.audioLevelsChanged";
    /**
     * The audio output of the track was changed.
     */
    ConfabTrackEvents["TRACK_AUDIO_OUTPUT_CHANGED"] = "track.audioOutputChanged";
    /**
     * A media track mute status was changed.
     */
    ConfabTrackEvents["TRACK_MUTE_CHANGED"] = "track.trackMuteChanged";
    /**
     * The video type("camera" or "desktop") of the track was changed.
     */
    ConfabTrackEvents["TRACK_VIDEOTYPE_CHANGED"] = "track.videoTypeChanged";
    /**
     * Indicates that the track is not receiving any data even though we expect it
     * to receive data (i.e. the stream is not stopped).
     */
    ConfabTrackEvents["NO_DATA_FROM_SOURCE"] = "track.no_data_from_source";
    /**
     * Indicates that the local audio track is not receiving any audio input from
     * the microphone that is currently selected.
     */
    ConfabTrackEvents["NO_AUDIO_INPUT"] = "track.no_audio_input";
    /**
     * Event fired whenever video track's streaming changes.
     * First argument is the sourceName of the track and the second is a string indicating if the connection is currently
     * - active - the connection is active.
     * - inactive - the connection is inactive, was intentionally interrupted by the bridge because of low BWE or because
     *   of the endpoint falling out of last N.
     * - interrupted - a network problem occurred.
     * - restoring - the connection was inactive and is restoring now.
     *
     * The current status value can be obtained by calling ConfabRemoteTrack.getTrackStreamingStatus().
     */
    ConfabTrackEvents["TRACK_STREAMING_STATUS_CHANGED"] = "track.streaming_status_changed";
})(ConfabTrackEvents || (ConfabTrackEvents = {}));
;
// exported for backward compatibility
export const LOCAL_TRACK_STOPPED = ConfabTrackEvents.LOCAL_TRACK_STOPPED;
export const TRACK_AUDIO_LEVEL_CHANGED = ConfabTrackEvents.TRACK_AUDIO_LEVEL_CHANGED;
export const TRACK_AUDIO_OUTPUT_CHANGED = ConfabTrackEvents.TRACK_AUDIO_OUTPUT_CHANGED;
export const TRACK_MUTE_CHANGED = ConfabTrackEvents.TRACK_MUTE_CHANGED;
export const TRACK_VIDEOTYPE_CHANGED = ConfabTrackEvents.TRACK_VIDEOTYPE_CHANGED;
export const NO_DATA_FROM_SOURCE = ConfabTrackEvents.NO_DATA_FROM_SOURCE;
export const NO_AUDIO_INPUT = ConfabTrackEvents.NO_AUDIO_INPUT;
export const TRACK_STREAMING_STATUS_CHANGED = ConfabTrackEvents.TRACK_STREAMING_STATUS_CHANGED;
//# sourceMappingURL=ConfabTrackEvents.js.map