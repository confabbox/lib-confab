import ConfabTrackError from '../../ConfabTrackError';

declare namespace ScreenObtainer {
  const obtainStream: unknown, // TODO:
  init: ( options: unknown ) => void, // TODO:
  isSupported: () => boolean,
  obtainScreenOnElectron: ( onSuccess: () => unknown, onFailure: ( err: ConfabTrackError ) => unknown ) => void, // TODO:
  obtainScreenFromGetDisplayMedia: ( callback: () => unknown, errorCallback: () => unknown ) => void, // TODO:
  obtainScreenFromGetDisplayMediaRN: ( callback: () => unknown, errorCallback: ( err: ConfabTrackError ) => unknown ) => void, // TODO:
  setDesktopSharingFrameRate: (maxFps: number) => void
}

export default ScreenObtainer;
