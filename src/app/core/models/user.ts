import { Roles } from './role';

export class User {
  username: string;
  password: string;
  token?: string;
  roles: string[] = null;
  /*
  constructor(
    public username: string,
    public password: string,
    public token?: string) { }*/

}
