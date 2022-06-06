import * as exported from "./ConfabMediaDevicesEvents";

// this test is brittle on purpose because it's designed to ensure that the TypeScript conversion maintains backward compatibility

describe( "/ConfabMediaDevicesEvents members", () => {
    const {
        DEVICE_LIST_CHANGED,
        PERMISSIONS_CHANGED,
        PERMISSION_PROMPT_IS_SHOWN,
        SLOW_GET_USER_MEDIA,
        ConfabMediaDevicesEvents,
        ...others
    } = exported;

    it( "known members", () => {
        expect( DEVICE_LIST_CHANGED ).toBe( 'mediaDevices.devicechange' );
        expect( PERMISSIONS_CHANGED ).toBe( 'rtc.permissions_changed' );
        expect( PERMISSION_PROMPT_IS_SHOWN ).toBe( 'mediaDevices.permissionPromptIsShown' );
        expect( SLOW_GET_USER_MEDIA ).toBe( 'mediaDevices.slowGetUserMedia' );

        expect( ConfabMediaDevicesEvents ).toBeDefined();

        expect( ConfabMediaDevicesEvents.DEVICE_LIST_CHANGED ).toBe( 'mediaDevices.devicechange' );
        expect( ConfabMediaDevicesEvents.PERMISSIONS_CHANGED ).toBe( 'rtc.permissions_changed' );
        expect( ConfabMediaDevicesEvents.PERMISSION_PROMPT_IS_SHOWN ).toBe( 'mediaDevices.permissionPromptIsShown' );
        expect( ConfabMediaDevicesEvents.SLOW_GET_USER_MEDIA ).toBe( 'mediaDevices.slowGetUserMedia' );
    } );

    it( "unknown members", () => {
        const keys = Object.keys( others );
        expect( keys ).withContext( `Extra members: ${ keys.join( ", " ) }` ).toEqual( [] );
    } );
} );