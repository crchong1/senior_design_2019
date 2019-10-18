import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
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
			<div>
			<Form>
				<grid>
					<Row>
					<Col>
					<Form.Group controlId="firstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text" placeholder="First Name on State ID" />
					</Form.Group>
					</Col>
					<Col>
					<Form.Group controlId="lastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text" placeholder="Last Name on State ID" />
					</Form.Group>
					</Col>
					</Row>
				</grid>
			</Form>
			</div>
		);
	}
}

export default Login;