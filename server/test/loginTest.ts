import mongoose from 'mongoose';
import { User, UserJSON, userModel } from "../schemas/User";
import { generateHash, checkPassword } from './../app/LoginUtils';
import config from '../app/config';
describe("Login", () => {
	beforeEach(() => {
		let testUser: userModel = new userModel({
			userId: -1,
			username: "test_user",
			password: generateHash("password"),
			firstname: "test",
			middlename: "",
			lastname: "user",
			birthdate: new Date("1997-12-14"),
			sex: "male",
			dateCreated: new Date("1997-12-15"),
			privelegeLevel: "",
			orgs: [],
			orgIds: []
		});

		testUser.save(function(err, testUser) {
			if (err) return console.error(err);
		});
	});

	it('Logs in an existing user.', done => {
		const response: Response = await fetch(`localhost:${config.serverPort}/postLogin`, {
			method: 'POST',
			body: JSON.stringify({
				userId: -1,
				username: "test_user",
				password: generateHash("password"),
				firstname: "test",
				middlename: "",
				lastname: "user",
				birthdate: new Date("1997-12-14"),
				sex: "male",
				dateCreated: new Date("1997-12-15"),
				privelegeLevel: "",
				orgs: [],
				orgIds: []
			})
		});
		expect(response.body).toBe("SUCCESS");
	});

	afterEach(() => {
		userModel.findOne({userId: -1}).remove().exec();
	});
});