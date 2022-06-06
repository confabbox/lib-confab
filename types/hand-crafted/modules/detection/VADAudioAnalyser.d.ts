import { VADProcessor } from "./TrackVADEmitter";
import ConfabConference from '../../ConfabConference';
import EventEmitter from '../../EventEmitter';

export default class VADAudioAnalyser extends EventEmitter<unknown> { // TODO:
  constructor( conference: ConfabConference, createVADProcessor: () => VADProcessor );
  addVADDetectionService: ( vadService: unknown ) => void;
}
