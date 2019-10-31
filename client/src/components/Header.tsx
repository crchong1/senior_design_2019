import React, { Component } from 'react';
import {
  Navbar, Button, Col, Row, Form, InputGroup,
} from 'react-bootstrap';
import Logo from '../static/images/logo.svg';
import UsernameSVG from '../static/images/username.svg';
import PasswordSVG from '../static/images/password.svg';

class Header extends Component {
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
        <Navbar bg="primary-theme" variant="dark" sticky="top">
          <Form>
            <Row className="d-flex justify-content-end">
              <Col sm={2}>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src={Logo}
                    width="48"
                    height="48"
                    className="d-inline-block align-top"
                  />
                    keep.id
                </Navbar.Brand>
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <img
                        alt=""
                        src={UsernameSVG}
                        width="22px"
                        height="22px"
                        className="d-inline-block align-middle"
                      />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="First-Last-MM-DD-YYYY"
                    aria-describedby="Username Login"
                    required
                  />
                  {/* <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback> */}
                </InputGroup>
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <img
                        alt=""
                        src={PasswordSVG}
                        width="22px"
                        height="22px"
                        className="d-inline-block align-middle"
                      />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-describedby="Password Login"
                    required
                  />
                  {/* <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback> */}
                </InputGroup>
              </Col>
              <Col sm={2}>
                <Button variant="outline-light" type="submit">
                  <b>Login</b>
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;
