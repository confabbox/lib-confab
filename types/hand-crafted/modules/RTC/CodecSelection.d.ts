import ConfabConference from '../../ConfabConference';
import { CodecMimeType } from '../../service/RTC/CodecMimeType';

export class CodecSelection {
  constructor( conference: ConfabConference, options: { disabledCodec: string, enforcePreferredCodec: boolean, jvbCodec: string, p2pCodec: string } );  // TODO:
  getPreferredCodec: () => CodecMimeType;
}
