import React, { Component } from 'react';
import USStates from '../static/data/states_titlecase.json';

// Need to validate form to make sure inputs are good, address is good, etc.
// Google API for address checking

interface State {
  clientFirstName: string,
  clientLastName: string,
  clientEmail: string,
  clientPhoneNumber: string,
  clientAddressLine1: string,
  clientAddressCity: string,
  clientAddressState: string,
  clientAddressZipcode: string,
  clientPassword1: string,
  clientPassword2: string
}

class ClientSignup extends Component<{}, State, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      clientFirstName: '',
      clientLastName: '',
      clientEmail: '',
      clientPhoneNumber: '',
      clientAddressLine1: '',
      clientAddressCity: '',
      clientAddressState: USStates[0].name,
      clientAddressZipcode: '',
      clientPassword1: '',
      clientPassword2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeClientFirstName = this.handleChangeClientFirstName.bind(this);
    this.handleChangeClientLastName = this.handleChangeClientLastName.bind(this);
    
    this.handleChangeClientEmail = this.handleChangeClientEmail.bind(this);
    this.handleChangeClientPhoneNumber = this.handleChangeClientPhoneNumber.bind(this);
    this.handleChangeClientAddressLine1 = this.handleChangeClientAddressLine1.bind(this);
    this.handleChangeClientAddressCity = this.handleChangeClientAddressCity.bind(this);
    this.handleChangeClientAddressState = this.handleChangeClientAddressState.bind(this);
    this.handleChangeClientAddressZipcode = this.handleChangeClientAddressZipcode.bind(this);
    this.handleChangeClientPassword1 = this.handleChangeClientPassword1.bind(this);
    this.handleChangeClientPassword2 = this.handleChangeClientPassword2.bind(this);
  }

  handleSubmit(event: any) {
    event.preventDefault();
    if (this.state.clientPassword1 !== this.state.clientPassword2) {
      alert('Your passwords are not identical');
    } else {
      alert('Submitted request for new guest');
    }
  }

  handleChangeClientFirstName(event: any) {
    console.log(event);
    this.setState({ clientFirstName: event.target.value });
  }

  handleChangeClientLastName(event: any) {
    this.setState({ clientLastName: event.target.value });
  }

  handleChangeClientEmail(event: any) {
    this.setState({ clientEmail: event.target.value });
  }

  handleChangeClientPhoneNumber(event: any) {
    this.setState({ clientPhoneNumber: event.target.value });
  }

  handleChangeClientAddressLine1(event: any) {
    this.setState({ clientAddressLine1: event.target.value });
  }

  handleChangeClientAddressCity(event: any) {
    this.setState({ clientAddressCity: event.target.value });
  }

  handleChangeClientAddressState(event: any) {
    this.setState({ clientAddressState: event.target.value });
  }

  handleChangeClientAddressZipcode(event: any) {
    this.setState({ clientAddressZipcode: event.target.value });
  }

  handleChangeClientPassword1(event: any) {
    this.setState({ clientPassword1: event.target.value });
  }

  handleChangeClientPassword2(event: any) {
    this.setState({ clientPassword2: event.target.value });
  }

  render() {
    // if (this.state.reaffirmStage) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h3 className="text-center textPrintHeader">
                  Client Signup Page
            </h3>
            <p className="textPrintDesc pl-3">
              <span>Thank you for using Keep.id to store your personal documents. Please fill out the following form to proceed with setting up your Keep.id account.</span>
            </p>
            <form>
              <div className="col-md-12">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="inputFirstName">
First Name
                      <text className="red-star">*</text>
                    </label>
                    <input type="text" 
                      className="form-control form-purple" 
                      id="firstName" 
                      onChange={this.handleChangeClientFirstName}
                      value={this.state.clientFirstName}
                      placeholder="John" 
                      required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="inputLastName">
Last Name
                      <text className="red-star">*</text>
                    </label>
                    <input type="text" className="form-control form-purple" id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-5 form-group">
                    <label htmlFor="inputPhone">
Contact Phone Number
                      <text className="red-star">*</text>
                    </label>
                    <input type="tel" className="form-control form-purple" id="phoneNumber" placeholder="1-(234)-567-8901" required />
                  </div>
                  <div className="col-md-7 form-group">
                    <label htmlFor="inputEmail">
Contact Email Address
                      <text className="red-star">*</text>
                    </label>
                    <input type="email" className="form-control form-purple" id="email" placeholder="contact@example.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-4 form-group">
                    <label htmlFor="inputMailingAddress">
Client Mailing Address
                      <text className="red-star">*</text>
                    </label>
                    <input type="text" className="form-control form-purple" id="mailingAddress" placeholder="311 Broad St" required />
                  </div>
                  <div className="col-md-3 form-group">
                    <label htmlFor="inputCity">
City
                      <text className="red-star">*</text>
                    </label>
                    <input type="text" className="form-control form-purple" id="city" placeholder="Philadelphia" required />
                  </div>
                  <div className="col-md-2 form-group">
                    <label htmlFor="inputState">
State
                      <text className="red-star">*</text>
                    </label>
                    <input type="text" className="form-control form-purple" id="state" placeholder="PA" required />
                  </div>
                  <div className="col-md-3 form-group">
                    <label htmlFor="inputZipCode">
Zip Code
                      <text className="red-star">*</text>
                    </label>
                    <input type="number" className="form-control form-purple" id="zipCode" placeholder="19104" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-4 form-group">
                    <label htmlFor="inputPassword">
Password
                      <text className="red-star">*</text>
                    </label>
                    <input type="password" className="form-control form-purple" id="password" placeholder="Password" required />
                  </div>
                  <div className="col-md-4 form-group">
                    <label htmlFor="inputConfirmPassword">
Confirm Password
                      <text className="red-star">*</text>
                    </label>
                    <input type="password" className="form-control form-purple" id="confirmPassword" placeholder="Confirm password" required />
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

export default ClientSignup;
