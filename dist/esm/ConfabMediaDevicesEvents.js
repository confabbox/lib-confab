/**
 * The events for the media devices.
 */
export var ConfabMediaDevicesEvents;
(function (ConfabMediaDevicesEvents) {
    /**
     * Indicates that the list of available media devices has been changed. The
     * event provides the following parameters to its listeners:
     *
     * @param {MediaDeviceInfo[]} devices - array of MediaDeviceInfo or
     *  MediaDeviceInfo-like objects that are currently connected.
     *  @see https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo
     */
    ConfabMediaDevicesEvents["DEVICE_LIST_CHANGED"] = "mediaDevices.devicechange";
    /**
     * Event emitted when the user granted/blocked a permission for the camera / mic.
     * Used to keep track of the granted permissions on browsers which don't
     * support the Permissions API.
     */
    ConfabMediaDevicesEvents["PERMISSIONS_CHANGED"] = "rtc.permissions_changed";
    /**
     * Indicates that the environment is currently showing permission prompt to
     * access camera and/or microphone. The event provides the following
     * parameters to its listeners:
     *
     * @param {'chrome'|'opera'|'firefox'|'safari'|'nwjs'
     *  |'react-native'|'android'} environmentType - type of browser or
     *  other execution environment.
     */
    ConfabMediaDevicesEvents["PERMISSION_PROMPT_IS_SHOWN"] = "mediaDevices.permissionPromptIsShown";
    ConfabMediaDevicesEvents["SLOW_GET_USER_MEDIA"] = "mediaDevices.slowGetUserMedia";
})(ConfabMediaDevicesEvents || (ConfabMediaDevicesEvents = {}));
;
// exported for backward compatibility
export const DEVICE_LIST_CHANGED = ConfabMediaDevicesEvents.DEVICE_LIST_CHANGED;
export const PERMISSIONS_CHANGED = ConfabMediaDevicesEvents.PERMISSIONS_CHANGED;
export const PERMISSION_PROMPT_IS_SHOWN = ConfabMediaDevicesEvents.PERMISSION_PROMPT_IS_SHOWN;
export const SLOW_GET_USER_MEDIA = ConfabMediaDevicesEvents.SLOW_GET_USER_MEDIA;
//# sourceMappingURL=ConfabMediaDevicesEvents.js.map