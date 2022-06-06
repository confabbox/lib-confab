/**
 * The errors for the connection.
 */
export declare enum ConfabConnectionErrors {
    /**
     * Indicates that the connection was dropped with an error which was most likely
     * caused by some networking issues. The dropped term in this context means that
     * the connection was closed unexpectedly (not on user's request).
     *
     * One example is 'item-not-found' error thrown by Prosody when the BOSH session
     * times out after 60 seconds of inactivity. On the other hand 'item-not-found'
     * could also happen when BOSH request is sent to the server with the session-id
     * that is not know to the server. But this should not happen in lib-confab
     * case as long as the service is configured correctly (there is no bug).
     */
    CONNECTION_DROPPED_ERROR = "connection.droppedError",
    /**
     * Not specified errors.
     */
    OTHER_ERROR = "connection.otherError",
    /**
     * Indicates that a password is required in order to join the conference.
     */
    PASSWORD_REQUIRED = "connection.passwordRequired",
    /**
     * Indicates that the connection was dropped, because of too many 5xx HTTP
     * errors on BOSH requests.
     */
    SERVER_ERROR = "connection.serverError"
}
export declare const CONNECTION_DROPPED_ERROR = ConfabConnectionErrors.CONNECTION_DROPPED_ERROR;
export declare const OTHER_ERROR = ConfabConnectionErrors.OTHER_ERROR;
export declare const PASSWORD_REQUIRED = ConfabConnectionErrors.PASSWORD_REQUIRED;
export declare const SERVER_ERROR = ConfabConnectionErrors.SERVER_ERROR;
