import * as exported from "./ConfabConferenceErrors";

// this test is brittle on purpose because it's designed to ensure that the TypeScript conversion maintains backward compatibility

describe( "/ConfabConferenceErrors members", () => {
    const {
        AUTHENTICATION_REQUIRED,
        CHAT_ERROR,
        SETTINGS_ERROR,
        CONFERENCE_DESTROYED,
        CONFERENCE_MAX_USERS,
        CONNECTION_ERROR,
        CONFERENCE_RESTARTED,
        NOT_ALLOWED_ERROR,
        MEMBERS_ONLY_ERROR,
        CONFERENCE_ACCESS_DENIED,
        FOCUS_DISCONNECTED,
        FOCUS_LEFT,
        GRACEFUL_SHUTDOWN,
        ICE_FAILED,
        INCOMPATIBLE_SERVER_VERSIONS,
        OFFER_ANSWER_FAILED,
        PASSWORD_NOT_SUPPORTED,
        PASSWORD_REQUIRED,
        RESERVATION_ERROR,
        VIDEOBRIDGE_NOT_AVAILABLE,
        ConfabConferenceErrors,
        ...others
    } = exported;

    it( "known members", () => {
        expect( AUTHENTICATION_REQUIRED ).toBe( 'conference.authenticationRequired' );
        expect( CHAT_ERROR ).toBe( 'conference.chatError' );
        expect( SETTINGS_ERROR ).toBe( 'conference.settingsError' );
        expect( CONFERENCE_DESTROYED ).toBe( 'conference.destroyed' );
        expect( CONFERENCE_MAX_USERS ).toBe( 'conference.max_users' );
        expect( CONNECTION_ERROR ).toBe( 'conference.connectionError' );
        expect( CONFERENCE_RESTARTED ).toBe( 'conference.restarted' );
        expect( NOT_ALLOWED_ERROR ).toBe( 'conference.connectionError.notAllowed' );
        expect( MEMBERS_ONLY_ERROR ).toBe( 'conference.connectionError.membersOnly' );
        expect( CONFERENCE_ACCESS_DENIED ).toBe( 'conference.connectionError.accessDenied' );
        expect( FOCUS_DISCONNECTED ).toBe( 'conference.focusDisconnected' );
        expect( FOCUS_LEFT ).toBe( 'conference.focusLeft' );
        expect( GRACEFUL_SHUTDOWN ).toBe( 'conference.gracefulShutdown' );
        expect( ICE_FAILED ).toBe( 'conference.iceFailed' );
        expect( INCOMPATIBLE_SERVER_VERSIONS ).toBe( 'conference.incompatible_server_versions' );
        expect( OFFER_ANSWER_FAILED ).toBe( 'conference.offerAnswerFailed' );
        expect( PASSWORD_NOT_SUPPORTED ).toBe( 'conference.passwordNotSupported' );
        expect( PASSWORD_REQUIRED ).toBe( 'conference.passwordRequired' );
        expect( RESERVATION_ERROR ).toBe( 'conference.reservationError' );
        expect( VIDEOBRIDGE_NOT_AVAILABLE ).toBe( 'conference.videobridgeNotAvailable' );

        expect( ConfabConferenceErrors ).toBeDefined();

        expect( ConfabConferenceErrors.AUTHENTICATION_REQUIRED ).toBe( 'conference.authenticationRequired' );
        expect( ConfabConferenceErrors.CHAT_ERROR ).toBe( 'conference.chatError' );
        expect( ConfabConferenceErrors.SETTINGS_ERROR ).toBe( 'conference.settingsError' );
        expect( ConfabConferenceErrors.CONFERENCE_DESTROYED ).toBe( 'conference.destroyed' );
        expect( ConfabConferenceErrors.CONFERENCE_MAX_USERS ).toBe( 'conference.max_users' );
        expect( ConfabConferenceErrors.CONNECTION_ERROR ).toBe( 'conference.connectionError' );
        expect( ConfabConferenceErrors.CONFERENCE_RESTARTED ).toBe( 'conference.restarted' );
        expect( ConfabConferenceErrors.NOT_ALLOWED_ERROR ).toBe( 'conference.connectionError.notAllowed' );
        expect( ConfabConferenceErrors.MEMBERS_ONLY_ERROR ).toBe( 'conference.connectionError.membersOnly' );
        expect( ConfabConferenceErrors.CONFERENCE_ACCESS_DENIED ).toBe( 'conference.connectionError.accessDenied' );
        expect( ConfabConferenceErrors.FOCUS_DISCONNECTED ).toBe( 'conference.focusDisconnected' );
        expect( ConfabConferenceErrors.FOCUS_LEFT ).toBe( 'conference.focusLeft' );
        expect( ConfabConferenceErrors.GRACEFUL_SHUTDOWN ).toBe( 'conference.gracefulShutdown' );
        expect( ConfabConferenceErrors.ICE_FAILED ).toBe( 'conference.iceFailed' );
        expect( ConfabConferenceErrors.INCOMPATIBLE_SERVER_VERSIONS ).toBe( 'conference.incompatible_server_versions' );
        expect( ConfabConferenceErrors.OFFER_ANSWER_FAILED ).toBe( 'conference.offerAnswerFailed' );
        expect( ConfabConferenceErrors.PASSWORD_NOT_SUPPORTED ).toBe( 'conference.passwordNotSupported' );
        expect( ConfabConferenceErrors.PASSWORD_REQUIRED ).toBe( 'conference.passwordRequired' );
        expect( ConfabConferenceErrors.RESERVATION_ERROR ).toBe( 'conference.reservationError' );
        expect( ConfabConferenceErrors.VIDEOBRIDGE_NOT_AVAILABLE ).toBe( 'conference.videobridgeNotAvailable' );
    } );

    it( "unknown members", () => {
        const keys = Object.keys( others );
        expect( keys ).withContext( `Extra members: ${ keys.join( ", " ) }` ).toEqual( [] );
    } );
} );