/**
 * The events for the connection.
 */
export var ConfabConnectionEvents;
(function (ConfabConnectionEvents) {
    /**
     * Indicates that the connection has been disconnected. The event provides
     * the following parameters to its listeners:
     *
     * @param msg {string} a message associated with the disconnect such as the
     * last (known) error message
     */
    ConfabConnectionEvents["CONNECTION_DISCONNECTED"] = "connection.connectionDisconnected";
    /**
     * Indicates that the connection has been established. The event provides
     * the following parameters to its listeners:
     *
     * @param id {string} the ID of the local endpoint/participant/peer (within
     * the context of the established connection)
     */
    ConfabConnectionEvents["CONNECTION_ESTABLISHED"] = "connection.connectionEstablished";
    /**
     * Indicates that the connection has been failed for some reason. The event
     * provides the following parameters to its listeners:
     *
     * @param errType {ConfabConnectionErrors} the type of error associated with
     * the failure
     * @param errReason {string} the error (message) associated with the failure
     * @param credentials {object} the credentials used to connect (if any)
     * @param errReasonDetails {object} an optional object with details about
     * the error, like shard moving, suspending. Used for analytics purposes.
     */
    ConfabConnectionEvents["CONNECTION_FAILED"] = "connection.connectionFailed";
    /**
     * Indicates that the performed action cannot be executed because the
     * connection is not in the correct state(connected, disconnected, etc.)
     */
    ConfabConnectionEvents["WRONG_STATE"] = "connection.wrongState";
    /**
     * Indicates that the display name is required over this connection and need to be supplied when
     * joining the room.
     * There are cases like lobby room where display name is required.
     */
    ConfabConnectionEvents["DISPLAY_NAME_REQUIRED"] = "connection.display_name_required";
})(ConfabConnectionEvents || (ConfabConnectionEvents = {}));
;
// exported for backward compatibility
export const CONNECTION_DISCONNECTED = ConfabConnectionEvents.CONNECTION_DISCONNECTED;
export const CONNECTION_ESTABLISHED = ConfabConnectionEvents.CONNECTION_ESTABLISHED;
export const CONNECTION_FAILED = ConfabConnectionEvents.CONNECTION_FAILED;
export const WRONG_STATE = ConfabConnectionEvents.WRONG_STATE;
export const DISPLAY_NAME_REQUIRED = ConfabConnectionEvents.DISPLAY_NAME_REQUIRED;
//# sourceMappingURL=ConfabConnectionEvents.js.map