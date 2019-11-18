import React, { Component } from 'react';
import EmailLogo from '../static/images/email-24px.svg';

interface State {
	loggedIn: boolean,
}

class Email extends Component<{}, State, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      loggedIn: true, // Change to true in order to show landing logged in
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src={EmailLogo} className="float-right mt-2" alt="Email" />
          </div>
          <div className="col-md-6 mt-4">
            <h3 className="textPrintHeader">
                        Send an Email
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 overflow-auto" id="emailTable">
            <form>
              <div className="form-group row">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">To: </label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email address" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputSubject" className="col-sm-2 col-form-label">Subject: </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputSubject" placeholder="Subject" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputBody" className="col-sm-2 col-form-label">Body: </label>
                <div className="col-sm-10">
                  <textarea className="form-control" id="inputBody" placeholder="Type your message here." />
                </div>
              </div>
              <button type="submit" className="btn btn-lg">
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Email;
