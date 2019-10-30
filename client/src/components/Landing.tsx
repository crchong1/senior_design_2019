import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UploadLogo from '../static/images/uploading-files-to-the-cloud.svg';
import PrintLogo from '../static/images/print.svg';
import RequestLogo from '../static/images/request.svg';
import AppLogo from '../static/images/calendar.svg';
import EmailLogo from '../static/images/email-24px.svg';
import AssistLogo from '../static/images/assistance.svg';

class Landing extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button href="/organization-signup">Sign up Organization</Button>
      <div id="Buttons">
        <div id="Upload container">
          <a href="/client-signup">
            <div className="uploadRectangle">
              <img className="uploadImg" src={UploadLogo} alt="Upload" />
            </div>
            <p className="uploadText">
Upload or Edit a
              <br />
Document
            </p>
          </a>
        </div>
        <div id="Print container">
          <a href="/client-signup">
            <div className="printRectangle">
              <img className="printImg" src={PrintLogo} alt="Print" />
            </div>
            <p className="printText">Print My Documents</p>
          </a>
        </div>
        <div id="Request container">
          <a href="/client-signup">
            <div className="requestRectangle">
              <img className="requestImg" src={RequestLogo} alt="Request" />
            </div>
            <p className="requestText">
Request My
              <br />
Documents
            </p>
          </a>
        </div>
        <div id="Applications container">
          <a href="/client-signup">
            <div className="appRectangle">
              <img className="appImg" src={AppLogo} alt="Applications" />
            </div>
            <p className="appText">My Applications</p>
          </a>
        </div>
        <div id="Email container">
          <a href="/client-signup">
            <div className="emailRectangle">
              <img className="emailImg" src={EmailLogo} alt="Email" />
            </div>
            <p className="emailText">Send an Email</p>
          </a>
        </div>
        <div id="Assistance container">
          <a href="/client-signup">
            <div className="assistRectangle">
              <img className="assistImg" src={AssistLogo} alt="Assistance" />
            </div>
            <p className="assistText">Need Assistance?</p>
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default Landing;
