import { readFileSync, writeFileSync } from 'fs';
import Client from './Client';
import OrgWorker from './OrgWorker';

export default class Organization {
  private orgId : number;

  private orgName: string;

  private orgDescription: string;

  private orgAdminIds: number[];

  // getter and setter methods
  constructor() {
    this.createId();
  }

  // getters
  getId() : number { return this.orgId; }

  getName() : string { return this.orgName; }

  getDescription() : string { return this.orgDescription; }

  getAdminIds() : number[] { return this.orgAdminIds; }


  createId() : void {
    const json = JSON.parse(readFileSync('./counter.json', 'utf8'));
    this.orgId = json.orgId;
    json.orgId += 1;
    writeFileSync('./counter.json', json);
  }

  toJSON() : string {
    return JSON.stringify({
      orgId: this.orgId,
      orgName: this.orgName,
      orgDescription: this.orgDescription,
      orgAdminIds: this.orgAdminIds
    });
  }
}
