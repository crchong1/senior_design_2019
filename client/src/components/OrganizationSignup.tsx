import * as React from "react";
import { Component } from 'react';
import {Form} from 'react-bootstrap';

class OrganizationSignup extends Component{
	constructor(props) {
		super(props);
		this.state = {
			organizationName : '',
			organizationStatus : '', //501c3, etc.
			organizationWebsite : '',
			organizationNumClients : '',
			organizationEmail : '',
			organizationPhoneNumber : '',
			organizationAddressLine1 : '',
			organizationAddressLine2 : '',
			organizationAddressCity : '',
			organizationAddressState : '',
			organizationAddressZipcode : '',
			acceptEULA : false,
		}
	}

	handleSubmit() {
		// if (isLoggedIn) {
		// 	//Redirect to main
		// } else {
		// 	this.setState({incorrectCredentials: true});
		// }
	}

	render() {
		return (
			<div>
				<Form>
					<h3>Organization Details</h3>
					<Form.Group controlId="organizationName">
						<Form.Label>Organization Name</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group controlId="organizationStatus">
						<Form.Label>Organization Status</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group controlId="organizationWebsite">
						<Form.Label>Organization Website</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group controlId="organizationNumClients">
						<Form.Label>Size of Client Base</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<h3>Organization Contact Information</h3>
					<Form.Group controlId="organizationEmail">
						<Form.Label>Organization Email</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group controlId="organizationPhoneNumber">
						<Form.Label>Organization Phone Number</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<h3>Organization Address</h3>
					<Form.Group controlId="organizationAddressLine1">
						<Form.Label>Organization Address Line One</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group controlId="organizationAddressLine2">
						<Form.Label>Organization Address Line Two</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group controlId="organizationCity">
						<Form.Label>Organization City</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<Form.Group controlId="organizationStatus">
						<Form.Label>Organization Status</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
					<h3>When submitting the form, please be prepared to wait 1-3 business days for us to investigate your organization in order to ensure you are in good standing with clients and the law. We will email you a link with instructions at the email you provided when we have approved your request to join, and we will give you a courtesy call</h3>
					<Form.Group controlId="acceptEULA">
						<Form.Label>I have read and accept the End User License Agreement</Form.Label>
						<Form.Control type="text" placeholder="" />
					</Form.Group>
				</Form>
			</div>
		);
	}
}

export default OrganizationSignup;