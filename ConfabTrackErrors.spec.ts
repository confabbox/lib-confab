import * as exported from "./ConfabTrackErrors";

// this test is brittle on purpose because it's designed to ensure that the TypeScript conversion maintains backward compatibility

describe( "/ConfabTrackErrors members", () => {
    const {
        CONSTRAINT_FAILED,
        ELECTRON_DESKTOP_PICKER_ERROR,
        ELECTRON_DESKTOP_PICKER_NOT_FOUND,
        GENERAL,
        NOT_FOUND,
        PERMISSION_DENIED,
        SCREENSHARING_GENERIC_ERROR,
        SCREENSHARING_USER_CANCELED,
        TIMEOUT,
        TRACK_IS_DISPOSED,
        TRACK_NO_STREAM_FOUND,
        UNSUPPORTED_RESOLUTION,
        ConfabTrackErrors,
        ...others
    } = exported;

    it( "known members", () => {
        expect( CONSTRAINT_FAILED ).toBe( 'gum.constraint_failed' );
        expect( ELECTRON_DESKTOP_PICKER_ERROR ).toBe( 'gum.electron_desktop_picker_error' );
        expect( ELECTRON_DESKTOP_PICKER_NOT_FOUND ).toBe( 'gum.electron_desktop_picker_not_found' );
        expect( GENERAL ).toBe( 'gum.general' );
        expect( NOT_FOUND ).toBe( 'gum.not_found' );
        expect( PERMISSION_DENIED ).toBe( 'gum.permission_denied' );
        expect( SCREENSHARING_GENERIC_ERROR ).toBe( 'gum.screensharing_generic_error' );
        expect( SCREENSHARING_USER_CANCELED ).toBe( 'gum.screensharing_user_canceled' );
        expect( TIMEOUT ).toBe( 'gum.timeout' );
        expect( TRACK_IS_DISPOSED ).toBe( 'track.track_is_disposed' );
        expect( TRACK_NO_STREAM_FOUND ).toBe( 'track.no_stream_found' );
        expect( UNSUPPORTED_RESOLUTION ).toBe( 'gum.unsupported_resolution' );

        expect( ConfabTrackErrors ).toBeDefined();

        expect( ConfabTrackErrors.CONSTRAINT_FAILED ).toBe( 'gum.constraint_failed' );
        expect( ConfabTrackErrors.ELECTRON_DESKTOP_PICKER_ERROR ).toBe( 'gum.electron_desktop_picker_error' );
        expect( ConfabTrackErrors.ELECTRON_DESKTOP_PICKER_NOT_FOUND ).toBe( 'gum.electron_desktop_picker_not_found' );
        expect( ConfabTrackErrors.GENERAL ).toBe( 'gum.general' );
        expect( ConfabTrackErrors.NOT_FOUND ).toBe( 'gum.not_found' );
        expect( ConfabTrackErrors.PERMISSION_DENIED ).toBe( 'gum.permission_denied' );
        expect( ConfabTrackErrors.SCREENSHARING_GENERIC_ERROR ).toBe( 'gum.screensharing_generic_error' );
        expect( ConfabTrackErrors.SCREENSHARING_USER_CANCELED ).toBe( 'gum.screensharing_user_canceled' );
        expect( ConfabTrackErrors.TIMEOUT ).toBe( 'gum.timeout' );
        expect( ConfabTrackErrors.TRACK_IS_DISPOSED ).toBe( 'track.track_is_disposed' );
        expect( ConfabTrackErrors.TRACK_NO_STREAM_FOUND ).toBe( 'track.no_stream_found' );
        expect( ConfabTrackErrors.UNSUPPORTED_RESOLUTION ).toBe( 'gum.unsupported_resolution' );
    } );

    it( "unknown members", () => {
        const keys = Object.keys( others );
        expect( keys ).withContext( `Extra members: ${ keys.join( ", " ) }` ).toEqual( [] );
    } );
} );