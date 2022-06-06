/**
 * A TrackRecorder object holds all the information needed for recording a
 * single ConfabTrack (either remote or local)
 * @param track The ConfabTrack the object is going to hold
 */
export default class TrackRecorder {
    /**
     * @param track The ConfabTrack the object is going to hold
     */
    constructor(track) {
        // The ConfabTrack holding the stream
        this.track = track;
        // The MediaRecorder recording the stream
        this.recorder = null;
        // The array of data chunks recorded from the stream
        // acts as a buffer until the data is stored on disk
        this.data = null;
        // the name of the person of the ConfabTrack. This can be undefined and/or
        // not unique
        this.name = null;
        // the time of the start of the recording
        this.startTime = null;
    }
}
//# sourceMappingURL=trackRecorder.js.map