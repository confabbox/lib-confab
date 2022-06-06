import ConfabConference from '../../ConfabConference';

export default class AvgRTPStatsReporter {
  constructor( conference: ConfabConference, n: number );
  dispose: () => void;
}
