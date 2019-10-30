import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Landing extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button href="/organization-signup">Sign up Organization</Button>
      </div>
    );
  }
}

export default Landing;
