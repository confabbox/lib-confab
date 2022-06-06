import ConfabConference from '../../ConfabConference';

export default function ComponentsVersions( conference: ConfabConference ): void;

export default class ComponentsVersions {
  constructor( conference: ConfabConference );
  processVersions: ( versions: unknown, mucResource: never, mucJid: string ) => void; // TODO:
  getComponentVersion: ( componentName: string ) => string;
}
