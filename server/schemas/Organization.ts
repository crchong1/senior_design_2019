import { readFileSync, writeFileSync } from 'fs';
import Client from './Client';
import OrgWorker from './OrgWorker';

export default class Organization {
  private orgId : number;

  private orgName: string;

  private orgDescription: string;

  private orgAdminIds: number[];

  private orgWorkerIds: number[];

  private orgClientIds: number[];

  private orgWorkers: OrgWorker[];

  private orgClients: Client[];

  // getter and setter methods
  constructor() {
    this.orgAdminIds = [];
    this.orgWorkerIds = [];
    this.orgClients = [];
    this.orgWorkers = [];
    this.createId();
  }

  // getters
  getId() : number { return this.orgId; }

  getName() : string { return this.orgName; }

  getDescription() : string { return this.orgDescription; }

  getAdminIds() : number[] { return this.orgAdminIds; }

  getWorkerIds() : number[] { return this.orgWorkerIds; }

  getWorkers() : OrgWorker[] { return this.orgWorkers; }

  getClients() : Client[] { return this.orgClients; }

  getClientIds() : number[] { return this.orgClientIds; }


  addWorker(orgWorker : OrgWorker) : void {
    this.orgWorkers.push(orgWorker);
    this.orgWorkerIds.push(orgWorker.getId());
  }

  addClient(client : Client) : void {
    this.orgClients.push(client);
    this.orgClientIds.push(client.getId());
  }

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
      orgAdminIds: this.orgAdminIds,
      orgWorkerIds: this.orgWorkerIds,
      orgClientsIds: this.orgClientIds,
    });
  }
}
