import * as exported from "./ConfabConnectionErrors";

// this test is brittle on purpose because it's designed to ensure that the TypeScript conversion maintains backward compatibility

describe( "/ConfabConnectionErrors members", () => {
    const {
        CONNECTION_DROPPED_ERROR,
        OTHER_ERROR,
        PASSWORD_REQUIRED,
        SERVER_ERROR,
        ConfabConnectionErrors,
        ...others
    } = exported;

    it( "known members", () => {
        expect( CONNECTION_DROPPED_ERROR ).toBe( 'connection.droppedError' );
        expect( OTHER_ERROR ).toBe( 'connection.otherError' );
        expect( PASSWORD_REQUIRED ).toBe( 'connection.passwordRequired' );
        expect( SERVER_ERROR ).toBe( 'connection.serverError' );

        expect( ConfabConnectionErrors ).toBeDefined();

        expect( ConfabConnectionErrors.CONNECTION_DROPPED_ERROR ).toBe( 'connection.droppedError' );
        expect( ConfabConnectionErrors.OTHER_ERROR ).toBe( 'connection.otherError' );
        expect( ConfabConnectionErrors.PASSWORD_REQUIRED ).toBe( 'connection.passwordRequired' );
        expect( ConfabConnectionErrors.SERVER_ERROR ).toBe( 'connection.serverError' );
    } );

    it( "unknown members", () => {
        const keys = Object.keys( others );
        expect( keys ).withContext( `Extra members: ${ keys.join( ", " ) }` ).toEqual( [] );
    } );
} );