import React, { Component } from 'react';
import OrganizationSelector from './OrganizationSelector';

class Login extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			incorrectCredentials : false,
			organization : '', //Selection Menu
			firstName : '',
			lastName : '',
			dob : '', //String selector - probability that two birthdays are same = birthday paradox with 36,500 days. This is 1 - 36500 P n / (36500^n)
			privateKey : '', //Ensure proper length, combination of words and numbers (have a mapping for people to remember)
		}
	}

	handleSubmit() {
		var isLoggedIn = false;//api.submitLogin(this.state.organization, this.state.firstName, this.lastName, this.dob, this.privateKey);
		if (isLoggedIn) {
			//Redirect to main
		} else {
			this.setState({incorrectCredentials: true});
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<OrganizationSelector props={this.state}/>
				<label>
					First Name:
						<input type="text"
						value={this.state.firstName}
						/>
				</label>
				<label>
					Last Name:
						<input type="text"
						value={this.state.lastName}
						/>
				</label>
				<label>
					Birthday:
						<input type="text"
						value={this.state.dob}
						/>
				</label>
				<label>
					Private Key:
						<input type="text"
						value={this.state.key}
						/>
				</label>
			</form>
		);
	}
}

export default Login;