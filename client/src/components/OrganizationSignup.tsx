import React, { Component } from 'react';
import {
  Form, Button, Container, Row, Col,
} from 'react-bootstrap';
import querystring from 'querystring';
import https from 'https';
import USStates from '../static/data/states_titlecase.json';
import NumClientOptions from '../static/data/num_client_options.json';

// Need to validate form to make sure inputs are good, address is good, etc.
// Google API for address checking

interface State {
  organizationName: string,
  organizationStatus: string,
  organizationWebsite: string,
  organizationNumClients: string,
  organizationEmail: string,
  organizationPhoneNumber: string,
  organizationAddressLine1: string,
  organizationAddressLine2: string,
  organizationAddressCity: string,
  organizationAddressState: string,
  organizationAddressZipcode: string,
  acceptEULA: boolean,
  reaffirmStage: boolean
}

class OrganizationSignup extends Component<{}, State, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    console.log(USStates);
    this.state = {
      organizationName: '',
      organizationStatus: '', // 501c3, etc.
      organizationWebsite: '',
      organizationNumClients: '',
      organizationEmail: '',
      organizationPhoneNumber: '',
      organizationAddressLine1: '',
      organizationAddressLine2: '',
      organizationAddressCity: '',
      organizationAddressState: '',
      organizationAddressZipcode: '',
      acceptEULA: false,
      reaffirmStage: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeOrganizationName = this.handleChangeOrganizationName.bind(this);
    this.handleChangeOrganizationStatus = this.handleChangeOrganizationStatus.bind(this);
    this.handleChangeOrganizationWebsite = this.handleChangeOrganizationWebsite.bind(this);
    this.handleChangeOrganizationNumClients = this.handleChangeOrganizationNumClients.bind(this);
    this.handleChangeOrganizationEmail = this.handleChangeOrganizationEmail.bind(this);
    this.handleChangeOrganizationPhoneNumber = this.handleChangeOrganizationPhoneNumber.bind(this);
    this.handleChangeOrganizationAddressLine1 = this.handleChangeOrganizationAddressLine1.bind(this);
    this.handleChangeOrganizationAddressLine2 = this.handleChangeOrganizationAddressLine2.bind(this);
    this.handleChangeOrganizationAddressCity = this.handleChangeOrganizationAddressCity.bind(this);
    this.handleChangeOrganizationAddressState = this.handleChangeOrganizationAddressState.bind(this);
    this.handleChangeOrganizationAddressZipcode = this.handleChangeOrganizationAddressZipcode.bind(this);
    this.handleChangeReaffirmStage = this.handleChangeReaffirmStage.bind(this);
    this.handleChangeAcceptEULA = this.handleChangeAcceptEULA.bind(this);
  }

  handleSubmit(event: any) {
    if (!this.state.acceptEULA) {
      alert('Please accept EULA before completing application');
    } else {
      alert('Thank you for Submitting. Please wait 1-3 business days for a response.');
      event.preventDefault();

      const postData = querystring.stringify({ test: 'hi' });
      //   this.state
      // );
      const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/upload',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
      };

      const req = https.request(options, (res) => {
        console.log('submit form');


        res.setEncoding('utf8');

        res.on('data', (chunk) => {
          console.log(chunk);
        });

        res.on('end', () => {
          console.log('No more data');
        });
      });

      req.on('error', (error) => {
        console.log(error.message);
      });

      req.write(postData);
      req.end();
    }
  }

  handleChangeOrganizationName(event: any) {
    console.log(event);
    this.setState({ organizationName: event.target.value });
  }

  handleChangeOrganizationStatus(event: any) {
    this.setState({ organizationStatus: event.target.value });
  }

  handleChangeOrganizationWebsite(event: any) {
    this.setState({ organizationWebsite: event.target.value });
  }

  handleChangeOrganizationNumClients(event: any) {
    this.setState({ organizationNumClients: event.target.value });
  }

  handleChangeOrganizationEmail(event: any) {
    this.setState({ organizationEmail: event.target.value });
  }

  handleChangeOrganizationPhoneNumber(event: any) {
    this.setState({ organizationPhoneNumber: event.target.value });
  }

  handleChangeOrganizationAddressLine1(event: any) {
    this.setState({ organizationAddressLine1: event.target.value });
  }

  handleChangeOrganizationAddressLine2(event: any) {
    this.setState({ organizationAddressLine2: event.target.value });
  }

  handleChangeOrganizationAddressCity(event: any) {
    this.setState({ organizationAddressCity: event.target.value });
  }

  handleChangeOrganizationAddressState(event: any) {
    this.setState({ organizationAddressState: event.target.value });
  }

  handleChangeOrganizationAddressZipcode(event: any) {
    this.setState({ organizationAddressZipcode: event.target.value });
  }

  handleChangeAcceptEULA(event: any) {
    this.setState({ acceptEULA : !this.state.acceptEULA});
  }
  handleChangeReaffirmStage(event: any) {
    event.preventDefault();
    this.setState({ reaffirmStage: !this.state.reaffirmStage });

  }

  render() {
    if (this.state.reaffirmStage) {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                Organization Name:
              </Col>
              <Col>
                {this.state.organizationName}
              </Col>
            </Row>
            <Row>
              <Col>
                Organization Status:
              </Col>
              <Col>
                {this.state.organizationStatus}
              </Col>
            </Row>
            <Row>
              <Col>
                Organization Website:
              </Col>
              <Col>
                {this.state.organizationWebsite}
              </Col>
            </Row>
          </Container>
          When submitting the form, please be prepared to wait 1-3 business days for us to investigate your organization in order to ensure you are in good standing with clients and the law. We will email you a link with instructions at the email you provided when we have approved your request to join, and we will give you a courtesy call
          <Form.Group controlId="acceptEULA">
            <Form.Check
              required
              label="I accept and have read the EULA"
              onChange={this.handleChangeAcceptEULA}
              feedback="Please consent to EULA before submitting"
            />
          </Form.Group>
          By Signing Below, you certify this application data is true to your knowledge and that you consent to the EULA
          <Button onClick={this.handleChangeReaffirmStage}>Back</Button>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </div>
      );
    }
    return (
      <div>
        <Form onSubmit={this.handleChangeReaffirmStage}>
          <h3>Organization Details</h3>
          <Form.Group controlId="organizationName">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={this.state.organizationName}
              onChange={this.handleChangeOrganizationName}
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationStatus">
            <Form.Label>Organization Status</Form.Label>
            <Form.Control
              type="text"
              value={this.state.organizationStatus}
              onChange={this.handleChangeOrganizationStatus}
            />
          </Form.Group>
          <Form.Group controlId="organizationWebsite">
            <Form.Label>Organization Website</Form.Label>
            <Form.Control
              type="text"
              value={this.state.organizationWebsite}
              onChange={this.handleChangeOrganizationWebsite}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationNumClients">
            <Form.Label>Size of Client Base</Form.Label>
            <Form.Control
              as="select"
              value={this.state.organizationNumClients}
              onChange={this.handleChangeOrganizationNumClients}
              required
            >
              {NumClientOptions.map((numClientOption) => (
                <option>
                  {numClientOption[0]}
-
                  {numClientOption[1]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <h3>Organization Contact Information</h3>
          <Form.Group controlId="organizationEmail">
            <Form.Label>Organization Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.organizationEmail}
              onChange={this.handleChangeOrganizationEmail}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationPhoneNumber">
            <Form.Label>Organization Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={this.state.organizationPhoneNumber}
              onChange={this.handleChangeOrganizationPhoneNumber}
              placeholder=""
              pattern="[0-9]{10}"
              required
            />
          </Form.Group>
          <h3>Organization Address</h3>
          <Form.Group controlId="organizationAddressLine1">
            <Form.Label>Organization Address Line One</Form.Label>
            <Form.Control
              type="text"
              value={this.state.organizationAddressLine1}
              onChange={this.handleChangeOrganizationAddressLine1}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationAddressLine2">
            <Form.Label>Organization Address Line Two</Form.Label>
            <Form.Control
              type="text"
              value={this.state.organizationAddressLine2}
              onChange={this.handleChangeOrganizationAddressLine2}
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="organizationCity">
            <Form.Label>Organization City</Form.Label>
            <Form.Control
              type="text"
              value={this.state.organizationAddressCity}
              onChange={this.handleChangeOrganizationAddressCity}
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationState">
            <Form.Label>Organization State</Form.Label>
            <Form.Control
              as="select"
              value={this.state.organizationAddressState}
              onChange={this.handleChangeOrganizationAddressState}
            >
              {USStates.map((state) => (<option>{state.name}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="organizationZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="text"
              value={this.state.organizationAddressZipcode}
              onChange={this.handleChangeOrganizationAddressZipcode}
              placeholder=""
              required
            />
          </Form.Group>
          <Button type="submit">Next</Button>
        </Form>
      </div>
    );
  }
}

export default OrganizationSignup;
