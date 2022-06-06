import ConfabConference from "../../ConfabConference";

export default class IceFailedHandling {
  constructor( conference: ConfabConference );
  start: () => void;
  cancel: () => void;
}
