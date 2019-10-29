import React, { Component } from 'react';
import UploadLogo from '../static/images/uploading-files-to-the-cloud.svg';

class Landing extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    const uploadText = {
      position: 'absolute' as 'absolute',
      width: '242px',
      height: '71px',
      left: '130px',
      top: '268px',

      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold' as 'bold',
      fontSize: '24px',
      lineHeight: '28px',
      textAlign: 'center' as 'center',

      color: '#000000',
    };
    const uploadImg = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
    };
    return (

      <div id="Upload container">
        <a href="/client-signup">
          <div className='uploadRectangle'>
            <img style={uploadImg} src={UploadLogo} alt="Upload" />
          </div>
          <p style={uploadText}>
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
