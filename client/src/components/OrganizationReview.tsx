import React, { Component } from 'react';
import USStates from '../static/data/states_titlecase.json';
import SignaturePad from '../react-typescript-signature-pad';
/*
import {
  Form, Button, Container, Row, Col,
} from 'react-bootstrap';
import querystring from 'querystring';
import https from 'https';

import NumClientOptions from '../static/data/num_client_options.json';

 */

// Need to validate form to make sure inputs are good, address is good, etc.
// Google API for address checking

interface State {
  /*
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
   */
}

class OrganizationReview extends Component<{}, State, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    console.log(USStates);
    this.state = {
      /*
      organizationName: '',
      organizationStatus: '', // 501c3, etc.
      organizationWebsite: '',
      organizationNumClients: `${NumClientOptions[0][0]}-${NumClientOptions[0][1]}`,
      organizationEmail: '',
      organizationPhoneNumber: '',
      organizationAddressLine1: '',
      organizationAddressLine2: '',
      organizationAddressCity: '',
      organizationAddressState: USStates[0].name,
      organizationAddressZipcode: '',
      acceptEULA: false,
      reaffirmStage: false,
       */
    };
/*
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

 */
  }
/*
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
    this.setState({ acceptEULA: !this.state.acceptEULA });
  }

  handleChangeReaffirmStage(event: any) {
    event.preventDefault();
    this.setState({ reaffirmStage: !this.state.reaffirmStage });
  }
*/
  render() {
    //if (this.state.reaffirmStage) {
      return (
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-5">
                <h3 className="text-center textPrintHeader">
                  Review Your Information
                </h3>
                <p className="textPrintDesc pl-3">
              <span>This is just to check if you have filled out all the fields correctly.</span>
                </p>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="inputOrgName">Organization Name</label>
                      <input type="text" readOnly className="form-control form-purple" id="orgName" placeholder="Keep" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputOrgWebsite">Organization Website</label>
                      <input type="url" readOnly className="form-control form-purple" id="orgWebsite" placeholder="https://www.keep.id" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <label htmlFor="inputContactName">Contact Name</label>
                      <input type="text" readOnly className="form-control form-purple" id="contactName" placeholder="John Doe" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputContactPhoneNumber">Contact Phone Number</label>
                      <input type="tel" readOnly className="form-control form-purple" id="contactPhoneNumber" placeholder="1-(234)-567-8901" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputContactEmail">Contact Email Address</label>
                      <input type="email" readOnly className="form-control form-purple" id="contactemail" placeholder="contact@example.com" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <label htmlFor="inputAddress">Organization Address</label>
                      <input type="text" readOnly className="form-control form-purple" id="address" placeholder="311 Broad St" />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputCity">City</label>
                      <input type="text" readOnly className="form-control form-purple" id="city" placeholder="Philadelphia" />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputState">State</label>
                      <input type="text" readOnly className="form-control form-purple" id="state" placeholder="PA" />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputZipCode">Zip Code</label>
                      <input type="number" readOnly className="form-control form-purple" id="zipCode" placeholder="19104" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <label htmlFor="inputEIN">Employer Identification Number </label>
                      <input type="password" readOnly className="form-control form-purple" id="ein" placeholder="12-3456789" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputNumUsers">Expected Number of Users</label>
                      <input type="number" readOnly className="form-control form-purple" id="numUsers" placeholder="1000" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <p className="textPrintDesc pl-3">
                <span>End User License Agreement</span>
              </p>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="eula-template.pdf" title="EULA Agreement"/>
              </div>
            </div>
            <div className="row mt-5">
              <p className="textPrintDesc pl-3">
                <span>I Agree and Sign</span>
              </p>
            </div>
            <div className="row mt-5 mb-auto">
            <span className="border">
              <SignaturePad />
              </span>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <p> Need API key for ReCaptcha, which requires domain name</p>
              </div>
              <div className="col-md-6 text-right">
                <button type="submit" className="btn btn-primary">Continue</button>
              </div>
            </div>
          </div>
    );
  }
}

export default OrganizationReview;