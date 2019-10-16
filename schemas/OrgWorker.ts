import Organization from './Organization';
import Client from './Client';
import User from './User';

export default class OrgWorker extends User {
  constructor(username: string, password: string) {
    super(username, password);
  }

  getId() : number {
    return this.userId;
  }
}
