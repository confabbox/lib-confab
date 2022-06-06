/**
 * A TrackRecorder object holds all the information needed for recording a
 * single ConfabTrack (either remote or local)
 * @param track The ConfabTrack the object is going to hold
 */
export default class TrackRecorder {
    /**
     * @param track The ConfabTrack the object is going to hold
     */
    constructor(track: any);
    track: any;
    recorder: any;
    data: any;
    name: any;
    startTime: any;
}
