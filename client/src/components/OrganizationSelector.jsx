import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class OrganizationSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			organizations : ["Broad Street Ministries", "Prevention Point", "Project HOME"],
		};
	}

	getOrganizations() {
		this.setState({organizations: []});//api.getOrganizations());
	}

	selectOrganization() {
		this.props.setState({organization: "BSM"});//organizationSelected);
	}

	render() {
		return (
			<Form.Group id="organization_selector">
				<Form.Label>Organization:</Form.Label>
				<Form.Control as="select">
					{this.state.organizations.map(organization => <option>{organization}</option>)}
				</Form.Control>
			</Form.Group>
		);
	}
}

export default OrganizationSelector;