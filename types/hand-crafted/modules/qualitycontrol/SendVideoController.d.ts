import ConfabConference from '../../ConfabConference';
import RTC from '../RTC/RTC';

export class SendVideoController {
  constructor( conference: ConfabConference, rtc: RTC );
  selectSendMaxFrameHeight: () => number | undefined;
  setPreferredSendMaxFrameHeight: ( maxFrameHeight: number ) => Promise<void[]>;
}
