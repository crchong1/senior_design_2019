import React, { Component } from 'react';

class OrganizationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: [],
    };
  }

  getOrganizations() {
    this.setState({ organizations: [] });// api.getOrganizations());
  }

  selectOrganization() {
    // this.props.setState({organization: "BSM"});//organizationSelected);
  }

  render() {
    return (
      <h1>Organization Selector</h1>
    );
  }
}

export default OrganizationSelector;
