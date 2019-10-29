import React, { Component } from 'react';
import UploadLogo from '../static/images/uploading-files-to-the-cloud.svg';

class Landing extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    const uploadRect = {
      position: 'absolute' as 'absolute',
      width: '339px',
      height: '242px',
      left: '82px',
      top: '129px',
      background: 'rgba(123, 129, 255, 0.12)',
    };
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
      position: 'absolute' as 'absolute',
      left: '15.62%',
      right: '76.41%',
      top: '23.75%',
      bottom: '66.72%',
    };
    return (
      <div>
        <div style={uploadRect}>
          <img style={uploadImg} src={UploadLogo} alt="Upload" />
        </div>
        <p style={uploadText}>Upload or Edit a Document</p>

      </div>
    );
  }
}

export default Landing;
