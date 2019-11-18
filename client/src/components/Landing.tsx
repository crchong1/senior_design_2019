import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
        <Redirect to="/login" />
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
            <a href="/request">
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
            <a data-toggle="modal" href="#assist" data-target="#assist">
              <div className="rectangle col-lg mt-4">
                <img className="normalImage" src={AssistLogo} alt="Assistance" />
                <p className="textLanding mt-5">Need Assistance?</p>
              </div>
            </a>
          </div>
          <div className="modal fade" id="assist" tabIndex={-1} role="dialog" aria-labelledby="assist" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="assistTitle">FAQ</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Send all technical issues to admin@keep.id
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
