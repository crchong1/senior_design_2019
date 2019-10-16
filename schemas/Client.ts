import User from './User';

export default class Client extends User {
  constructor(username: string, password: string) {
    super(username, password);
  }
}
