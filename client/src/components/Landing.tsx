import React, { Component } from 'react';
import UploadLogo from '../static/images/uploading-files-to-the-cloud.svg';

class Landing extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (

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
    );
  }
}

export default Landing;
