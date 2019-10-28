import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import https from 'https';
import USStates from '../static/data/states_titlecase.json';

//Need to validate form to make sure inputs are good, address is good, etc. 
//Google API for address checking

class OrganizationSignup extends Component {
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
    };
  }

  handleSubmit() {
    console.log("submit form");

    const options = {
      hostname: 'www.google.com',
      port: 80,
      path: '/upload',
      method: 'POST'
    };

    const req = https.request(options, (res) => {
      res.on('data', (d) => {
        console.log(d);
      });

      res.on('err', (err) => {
        console.error(err);
      });
    });
    
    req.end();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <h3>Organization Details</h3>
          <Form.Group controlId="organizationName">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationStatus">
            <Form.Label>Organization Status</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationWebsite">
            <Form.Label>Organization Website</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationNumClients">
            <Form.Label>Size of Client Base</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <h3>Organization Contact Information</h3>
          <Form.Group controlId="organizationEmail">
            <Form.Label>Organization Email</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationPhoneNumber">
            <Form.Label>Organization Phone Number</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <h3>Organization Address</h3>
          <Form.Group controlId="organizationAddressLine1">
            <Form.Label>Organization Address Line One</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationAddressLine2">
            <Form.Label>Organization Address Line Two</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="organizationCity">
            <Form.Label>Organization City</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="organizationState">
            <Form.Label>Organization State</Form.Label>
            <Form.Control as="select" multiple>
              {USStates.map((state) => (<option>{state.name}</option>) )}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="organizationZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              required
            />
          </Form.Group>
          <h5>
            When submitting the form, please be prepared to wait 1-3 business days for us to investigate your organization in order to ensure you are in good standing with clients and the law. We will email you a link with instructions at the email you provided when we have approved your request to join, and we will give you a courtesy call
          </h5>
          <Form.Group controlId="acceptEULA">
            <Form.Check 
              required
              label="I accept and have read the EULA"
              feedback="Please consent to EULA before submitting" 
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default OrganizationSignup;
