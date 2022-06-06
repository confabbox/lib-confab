import * as exported from "./ConfabTranscriptionStatus";

// this test is brittle on purpose because it's designed to ensure that the TypeScript conversion maintains backward compatibility

describe( "/ConfabTranscriptionStatus members", () => {
    const {
        ON,
        OFF,
        ConfabTranscriptionStatus,
        ...others
    } = exported;

    it( "known members", () => {
        expect( ON ).toBe( 'on' );
        expect( OFF ).toBe( 'off' );

        expect( ConfabTranscriptionStatus ).toBeDefined();

        expect( ConfabTranscriptionStatus.ON ).toBe( 'on' );
        expect( ConfabTranscriptionStatus.OFF ).toBe( 'off' );
    } );

    it( "unknown members", () => {
        const keys = Object.keys( others );
        expect( keys ).withContext( `Extra members: ${ keys.join( ", " ) }` ).toEqual( [] );
    } );
} );