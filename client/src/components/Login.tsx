import React, { Component } from 'react';
import { Navbar, Form } from 'react-bootstrap';
import OrganizationSelector from './OrganizationSelector';

class Login extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      incorrectCredentials: false,
      organization: '', // Selection Menu
      userId: '',
      password: '', // Ensure proper length, combination of words and numbers (have a mapping for people to remember)
    };
  }

  handleSubmit() {
    const isLoggedIn = false;// api.submitLogin(this.state.organization, this.userId, this.privateKey);
    if (isLoggedIn) {
      // Redirect to main
    } else {
      this.setState({ incorrectCredentials: true });
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Navbar>
            <OrganizationSelector />
            <Form.Group controlId="userId">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="firstname-lastname-MM-DD-YYYY"
              />
            </Form.Group>
            <Form.Group controlId="key">
              <Form.Label>Key</Form.Label>
              <Form.Control type="text" placeholder="key" />
            </Form.Group>
          </Navbar>
        </Form>
      </div>
    );
  }
}

export default Login;
