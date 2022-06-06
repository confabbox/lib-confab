import ConfabConnectionErrors from '../../ConfabConnectionErrors';

export default function authenticateAndUpgradeRole( options: { id: string, password: string, roomPassword?: string, onLoginSuccessful?: ( params: unknown ) => unknown } ): unknown;

export type UpgradeRoleError = {
  connectionError?: ConfabConnectionErrors,
  authenticationError?: string;
  message?: string;
  credentials?: {
    jid: string,
    password: string
  }
}