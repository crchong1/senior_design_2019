import React, { Component } from 'react';
import USStates from '../static/data/states_titlecase.json';
/*
import {
  Form, Button, Container, Row, Col,
} from 'react-bootstrap';
import querystring from 'querystring';
import https from 'https';

import NumClientOptions from '../static/data/num_client_options.json';
import SignaturePad from '../react-typescript-signature-pad';
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

class OrganizationSignup extends Component<{}, State, {}> {
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
                  Organization Signup Page
                </h3>
                <p className="textPrintDesc pl-3">
              <span>Thank you for expressing interest in using Keep.id in the fight to end homelessness.
                 Please fill out the following form so we can get back to you with instructions on how to proceed.</span>
                </p>
                <form>
                  <div className="col-md-12">
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="inputOrgName">Organization Name<text className="red-star">*</text></label>
                        <input type="text" className="form-control form-purple" id="orgName" placeholder="Keep" required />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="inputOrgWebsite">Organization Website</label>
                        <input type="url" className="form-control form-purple" id="orgWebsite" placeholder="https://www.keep.id" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="inputContactName">Contact Name<text className="red-star">*</text></label>
                        <input type="text" className="form-control form-purple" id="contactName" placeholder="John Doe" required />
                      </div>
                      <div className="col-md-4 form-group">
                        <label htmlFor="inputContactPhoneNumber">Contact Phone Number<text className="red-star">*</text></label>
                        <input type="tel" className="form-control form-purple" id="contactPhoneNumber" placeholder="1-(234)-567-8901" required />
                      </div>
                      <div className="col-md-4 form-group">
                        <label htmlFor="inputContactEmail">Contact Email Address<text className="red-star">*</text></label>
                        <input type="email" className="form-control form-purple" id="contactemail" placeholder="contact@example.com" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="inputAddress">Organization Address<text className="red-star">*</text></label>
                        <input type="text" className="form-control form-purple" id="address" placeholder="311 Broad St" required />
                      </div>
                      <div className="col-md-3 form-group">
                        <label htmlFor="inputCity">City<text className="red-star">*</text></label>
                        <input type="text" className="form-control form-purple" id="city" placeholder="Philadelphia" required />
                      </div>
                      <div className="col-md-2 form-group">
                        <label htmlFor="inputState">State<text className="red-star">*</text></label>
                        <input type="text" className="form-control form-purple" id="state" placeholder="PA" required />
                      </div>
                      <div className="col-md-3 form-group">
                        <label htmlFor="inputZipCode">Zip Code<text className="red-star">*</text></label>
                        <input type="number" className="form-control form-purple" id="zipCode" placeholder="19104" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="inputEIN">Employer Identification Number<text className="red-star">*</text> </label>

                        <input type="password" className="form-control form-purple" id="ein" placeholder="12-3456789" required />
                      </div>
                      <div className="col-md-4 form-group">
                        <label htmlFor="inputNumUsers">Expected Number of Users<text className="red-star">*</text></label>

                        <input type="number" className="form-control form-purple" id="numUsers" placeholder="1000" required />
                      </div>
                      <div className="col-auto mt-4 pt-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    );
  }
}

export default OrganizationSignup;
