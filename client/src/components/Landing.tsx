import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UploadLogo from '../static/images/uploading-files-to-the-cloud.svg';
import PrintLogo from '../static/images/print.svg';
import RequestLogo from '../static/images/request.svg';
import AppLogo from '../static/images/calendar.svg';
import EmailLogo from '../static/images/email-24px.svg';
import AssistLogo from '../static/images/assistance.svg';

interface State {
	loggedIn: boolean,
}

class Landing extends Component<{}, State, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      loggedIn: true, // Change to true in order to show landing logged in
    };
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Button href="/organization-signup">Sign up Organization</Button>
      );
    }
    return (
      <div id="Buttons" className="container">
        <div className="row">
          <div id="Upload container">
            <a href="/client-signup">
              <div className="rectangle col-lg mr-5 mt-5">
                <img className="uploadImg" src={UploadLogo} alt="Upload" />
                <p className="textLanding">
                  Upload or Edit a
                  <br />
                  Document
                </p>
              </div>

            </a>
          </div>
          <div id="Print container">
            <a href="/print">
              <div className="rectangle col-lg mr-5 mt-5">
                <img className="normalImage" src={PrintLogo} alt="Print" />
                <p className="textLanding mt-5">Print My Documents</p>
              </div>

            </a>
          </div>
          <div id="Request container">
            <a href="/client-signup">
              <div className="rectangle col-lg mt-5">
                <img className="normalImage" src={RequestLogo} alt="Request" />
                <p className="textLanding mt-3">
                  Request My
                  <br />
                  Documents
                </p>
              </div>

            </a>
          </div>
        </div>
        <div className="row">
          <div id="Applications container">
            <a href="/client-signup">
              <div className="rectangle col-lg mr-5 mt-4">
                <img className="normalImage" src={AppLogo} alt="Applications" />
                <p className="textLanding mt-5">My Applications</p>
              </div>
            </a>
          </div>
          <div id="Email container">
            <a href="/client-signup">
              <div className="rectangle col-lg mr-5 mt-4">
                <img className="normalImage" src={EmailLogo} alt="Email" />
                <p className="textLanding mt-5">Send an Email</p>
              </div>
            </a>
          </div>
          <div id="Assistance container">
            <a href="/client-signup">
              <div className="rectangle col-lg mt-4">
                <img className="normalImage" src={AssistLogo} alt="Assistance" />
                <p className="textLanding mt-5">Need Assistance?</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
