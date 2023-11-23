import { UsuarioComToken } from "./Utils";

export interface IUser {
  id?: number
  email?: string;
  token?: string;
}

export interface IContext {
  user: IUser
  authenticate: (email: string, password: string) => Promise<[UsuarioComToken, string]>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
