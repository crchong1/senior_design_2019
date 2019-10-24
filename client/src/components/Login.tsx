import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OrganizationSelector from './OrganizationSelector';
import Header from './Header';

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
        <Header></Header>
        <Navbar className="bg-light justify-content-between">
          <Form inline>
            <OrganizationSelector />
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
