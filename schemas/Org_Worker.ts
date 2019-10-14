import {Organization} from './Organization'
import {Client} from './Client'

export class Org_Worker {
    user_id: number
	username: string;
	first_name: string
	last_name: string
	birth_date: Date
	sex: string
	date_created: Date
	privilege_level: string
    organization: [Organization]
    organization_ids: [number]

    constructor() {

    }
}