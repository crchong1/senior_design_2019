import React, { Component } from 'react';
import SeeLogo from '../static/images/uploading-files-to-the-cloud.svg';

interface State {
	loggedIn: boolean,
}

class SeeDocs extends Component<{}, State, {}> {
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
            <img src={SeeLogo} className="float-right mt-2" alt="See" />
          </div>
          <div className="col-md-6 mt-4">
            <h3 className="textPrintHeader">
                        See My Documents
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="textPrintDesc mt-3">
              <span>Click the name of the document you would like to view, and it will open in a new tab on your internet browser.</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 overflow-auto" id="printTable">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr>
                  <td>
                    Document name
                  </td>
                </tr>
                <tr>
                  <td>
                      Document name
                  </td>
                </tr>
                <tr>
                  <td>
                          Document name
                  </td>
                </tr>
                <tr>
                  <td>
                          Document name
                  </td>
                </tr>
                <tr>
                  <td>
                          Document name
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SeeDocs;
