import {Client} from './Client'
import {Org_Worker} from './Org_Worker'


export class Organization {
	org_id : number;
	org_name: string;
	org_description: string;
	org_admin_ids: [number];
	org_worker_ids: [number];
    org_clients_ids: [number];
    org_workers: [Org_Worker];
    org_clients: [Client];
    // getter and setter methods
    constructor(){
        
    }
    add_worker(worker_id : number) {
        
    }

    to_JSON() : string {
        return JSON.stringify({
            'org_id' : this.org_id,
            'org_name': this.org_name,
            'org_description': this.org_description,
            'org_admin_ids': this.org_admin_ids,
            'org_worker_ids': this.org_worker_ids,
            'org_clients_ids': this.org_clients_ids,
        });
    }
}

