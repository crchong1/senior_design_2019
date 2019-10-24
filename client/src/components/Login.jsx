import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import OrganizationSelector from './OrganizationSelector';
import Button from 'react-bootstrap/Button';
class Login extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			incorrectCredentials : false,
			organization : '', //Selection Menu
			userId : '',
			password : '', //Ensure proper length, combination of words and numbers (have a mapping for people to remember)
		}
	}

	handleSubmit() {
		var isLoggedIn = false;//api.submitLogin(this.state.organization, this.userId, this.privateKey);
		if (isLoggedIn) {
			//Redirect to main
		} else {
			this.setState({incorrectCredentials: true});
		}
	}

	render() {
		return (
			<div>
				<Navbar className="bg-light justify-content-between">
					<Form inline>
						<OrganizationSelector/>
						<Form.Group controlId="userId">
							<Form.Label>User Id:</Form.Label>
							<Form.Control type="text" placeholder="first-last-MM-DD-YYYY" />
						</Form.Group>
						<Form.Group controlId="key">
							<Form.Label>Key:</Form.Label>
							<Form.Control type="password" placeholder="key" />
						</Form.Group>
						<Form.Group controlId="submit">
							<Button type="submit">Log In</Button>
						</Form.Group>
					</Form>
				</Navbar>
			</div>
		);
	}
}

export default Login;