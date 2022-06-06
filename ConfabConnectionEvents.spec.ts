import * as exported from "./ConfabConnectionEvents";

// this test is brittle on purpose because it's designed to ensure that the TypeScript conversion maintains backward compatibility

describe( "/ConfabConnectionEvents members", () => {
    const {
        CONNECTION_DISCONNECTED,
        CONNECTION_ESTABLISHED,
        CONNECTION_FAILED,
        WRONG_STATE,
        DISPLAY_NAME_REQUIRED,
        ConfabConnectionEvents,
        ...others
    } = exported;

    it( "known members", () => {
        expect( CONNECTION_DISCONNECTED ).toBe( 'connection.connectionDisconnected' );
        expect( CONNECTION_ESTABLISHED ).toBe( 'connection.connectionEstablished' );
        expect( CONNECTION_FAILED ).toBe( 'connection.connectionFailed' );
        expect( WRONG_STATE ).toBe( 'connection.wrongState' );
        expect( DISPLAY_NAME_REQUIRED ).toBe( 'connection.display_name_required' );

        expect( ConfabConnectionEvents ).toBeDefined();

        expect( ConfabConnectionEvents.CONNECTION_DISCONNECTED ).toBe( 'connection.connectionDisconnected' );
        expect( ConfabConnectionEvents.CONNECTION_ESTABLISHED ).toBe( 'connection.connectionEstablished' );
        expect( ConfabConnectionEvents.CONNECTION_FAILED ).toBe( 'connection.connectionFailed' );
        expect( ConfabConnectionEvents.WRONG_STATE ).toBe( 'connection.wrongState' );
        expect( ConfabConnectionEvents.DISPLAY_NAME_REQUIRED ).toBe( 'connection.display_name_required' );
    } );

    it( "unknown members", () => {
        const keys = Object.keys( others );
        expect( keys ).withContext( `Extra members: ${ keys.join( ", " ) }` ).toEqual( [] );
    } );
} );