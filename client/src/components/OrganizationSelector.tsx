import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export interface State {
  organizations: string[];
  organization: string;
}

class OrganizationSelector extends Component<any, State, any> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      organizations: ['Broad Street Ministries', 'Prevention Point', 'Project HOME'],
      organization: '',
    };
  }

  getOrganizations() {
    this.setState({ organizations: [] });// api.getOrganizations());
  }

  selectOrganization() {
    this.setState({ organization: 'BSM' });// organizationSelected);
  }

  render() {
    return (
      <Form.Group id="organization_selector">
        <Form.Label>Organization:</Form.Label>
        <Form.Control as="select">
          {this.state.organizations.map((organization) => <option>{organization}</option>)}
        </Form.Control>
      </Form.Group>
    );
  }
}

export default OrganizationSelector;
