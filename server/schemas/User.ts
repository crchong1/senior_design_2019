import { readFileSync, writeFileSync } from 'fs';
import Organization from './Organization';

export default class User {
  userId: number;

  username: string;

  password: string;

  firstName: string;

  middleName: string;

  lastName: string;

  birthDate: Date;

  sex: string;

  dateCreated: Date;

  privilegeLevel: string;

  orgs: Organization[];

  orgIds: number[];

  constructor(username: string, password: string) {
    this.orgs = [];
    this.orgIds = [];
    this.dateCreated = new Date();
    this.username = username;
    this.password = password;
    this.createId();
  }

  // getters
  getId() : number { return this.userId; }

  getUsername() : string { return this.username; }

  getFirstName() : string { return this.firstName; }

  getMiddleName() : string { return this.middleName; }

  getLastName() : string { return this.lastName; }

  getBirthDate() : Date { return this.birthDate; }

  getSex() : string { return this.sex; }

  getDateCreated() : Date { return this.dateCreated; }

  getPrivilegeLevel() : string { return this.privilegeLevel; }

  getOrgs() : Organization[] { return this.orgs; }

  getOrgIds() : number[] { return this.orgIds; }

  // setters
  setUsername(newUsername : string) : void { this.username = newUsername; }

  setFirstName(newFirstName : string) : void { this.firstName = newFirstName; }

  setMiddleName(newMiddleName : string) : void { this.middleName = newMiddleName; }

  setLastName(newLastName : string) : void { this.lastName = newLastName; }

  setBirthDate(newBirthDate : Date) : void { this.birthDate = newBirthDate; }

  setSex(newSex : string) : void { this.sex = newSex; }

  setPrivilegeLevel(newLevel : string) : void { this.privilegeLevel = newLevel; }

  // add
  addOrgId(orgId : number) : void { this.orgIds.push(orgId); }

  addOrg(org : Organization) : void { this.orgs.push(org); }

  // remove
  removeOrgId(orgId : number) : void {
    const index = this.orgIds.indexOf(orgId);
    if (index !== -1) {
      this.orgIds.splice(index, 1);
    } // if not found do nothing
  }

  removeOrg(orgId : number) : void {
    let index = -1;
    for (let i = 0; i < this.orgs.length; i += 1) {
      if (this.orgs[i].getId() === orgId) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      this.orgs.splice(index, 1);
    } // if not found do nothing
  }

  createId() : void {
    const json = JSON.parse(readFileSync('./counter.json', 'utf8'));
    this.userId = json.userId;
    json.userId += 1;
    writeFileSync('./counter.json', json);
  }
}
