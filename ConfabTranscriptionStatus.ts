export enum ConfabTranscriptionStatus {
    /**
     * The transcription is on.
     */
    ON = 'on',

    /**
     * The transcription is off.
     */
    OFF = 'off'
}

// exported for backward compatibility
export const ON = ConfabTranscriptionStatus.ON;
export const OFF = ConfabTranscriptionStatus.OFF;
