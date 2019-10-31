import React, { Component } from 'react';
import { render } from 'react-dom';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validNameRegex=
    RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
const validPhoneRegex=
    RegExp(/^[0-9]{10}$/)
const validPostalCode=
    RegExp(/^[0-9]{5}$/)
class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Register extends Component {
    constructor(props : Readonly<{}>) {
        super(props);
        this.state = {
            email: null,
            phone: null, 
            org: null,
            cma: null,
            city: null,
            state: null,
            postal: null,
            swnf: null,
            swnl: null,
            swe: null,
            swnum: null,
            fname: null,
            lname: null,
            username: null,
            password: null,
            errors: {
                email: '',
                phone: '', 
                org: '',
                cma: '',
                city: '',
                state: '',
                postal: '',
                swnf: '',
                swnl: '',
                swe: '',
                swnum: '',
                fname: '',
                lname: '',
                username: '',
                password: '',
            }
        };
    }
    handleChange = (event : any) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
            case 'email': 
                if (value.length == 0){
                    errors.email = ''
                }
                else if (!validEmailRegex.test(value)){
                    errors.email = 'Email is invalid'
                }
                else{
                    errors.email = ''
                }
                break;
            case 'phone': 
                if (value.length == 0){
                    errors.phone = ''
                }
                else if (!validPhoneRegex.test(value)){
                    errors.phone = 'Phone number is invalid'
                }
                else{
                    errors.phone = ''
                }
                break;
            case 'org': 
                errors.org = ''
                break;
            case 'cma': 
                errors.cma = ''
                break;
            case 'city': 
                errors.city = 
                !validNameRegex.test(value)
                    ? 'Must enter city name'
                    : '';
                break;
            case 'state': 
                errors.state = 
                value.length != 2
                    ? 'Must enter state abbreviation'
                    : '';
                break;
            case 'postal': 
                errors.postal =
                !validPostalCode.test(value)
                    ? 'Invalid postal code'
                    : '';
                break;
            case 'swnf': 
                errors.swnf = 
                !validNameRegex.test(value)
                    ? 'Invalid name'
                    : '';
                break;
            case 'swnl': 
                errors.swnl = 
                !validNameRegex.test(value)
                    ? 'Invalid name'
                    : '';
                break;
            case 'swe': 
                errors.swe = 
                !validEmailRegex.test(value)
                    ? 'Invalid email'
                    : '';
                break;
            case 'swnum': 
                errors.swnum =
                !validPhoneRegex.test(value)
                    ? 'Invalid phone number'
                    : '';
                break;
            case 'fname': 
                errors.fname = 
                !validNameRegex.test(value)
                    ? 'First name must be longer than 1 character long and only contain letters'
                    : '';
                break;
            case 'lname': 
                errors.lname = 
                !validNameRegex.test(value)
                    ? 'Last name must be longer than 1 character long and only contain letters'
                    : '';
                break;
            case 'username': 
                errors.username = 
                value.length < 5
                    ? 'Username must be over 4 character long'
                    : '';
                break;
            case 'password': 
                errors.password = 
                value.length < 6
                    ? 'Password must be over 5 characters long'
                    : '';
                break;
            default:
                break;
        }
      
        this.setState({errors, [name]: value});
    }
    handleSubmit = (event : any) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
        }else{
            console.error('Invalid Form')
        }
    }
    render() {
        const {errors} = this.state;

        return (
        <div className='wrapper'>
            <div className='form-wrapper'>
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit} noValidate >
                <div className='email'>
                    <label htmlFor="email">Email (if applicable)</label>
                    <input type='email' name='email' onChange={this.handleChange} noValidate />
                    {errors.email.length > 0 && 
                        <span className='error'>{errors.email}</span>}
                </div>
                <div className='phone'>
                    <label htmlFor="phone">Phone # (if applicable)</label>
                    <input type='phone' name='phone' onChange={this.handleChange} noValidate />
                    {errors.phone.length > 0 && 
                        <span className='error'>{errors.phone}</span>}
                </div>
                <div className='org'>
                    <label htmlFor="org">Orginization Name</label>
                    <input type='org' name='org' onChange={this.handleChange} noValidate />
                    {errors.org.length > 0 && 
                        <span className='error'>{errors.org}</span>}
                </div>
                <div className='cma'>
                    <label htmlFor="cma">Mailing Address</label>
                    <input type='cma' name='cma' onChange={this.handleChange} noValidate />
                    {errors.cma.length > 0 && 
                        <span className='error'>{errors.cma}</span>}
                </div>
                <div className='city'>
                    <label htmlFor="city">City</label>
                    <input type='city' name='city' onChange={this.handleChange} noValidate />
                    {errors.city.length > 0 && 
                        <span className='error'>{errors.city}</span>}
                </div>
                <div className='state'>
                    <label htmlFor="state">State</label>
                    <input type='sate' name='state' onChange={this.handleChange} noValidate />
                    {errors.state.length > 0 && 
                        <span className='error'>{errors.state}</span>}
                </div>
                <div className='postal'>
                    <label htmlFor="postal">Postal Code</label>
                    <input type='postal' name='postal' onChange={this.handleChange} noValidate />
                    {errors.postal.length > 0 && 
                        <span className='error'>{errors.postal}</span>}
                </div>
                <div className='swnf'>
                    <label htmlFor="swnf">Your Social Worker's First Name</label>
                    <input type='swnf' name='swnf' onChange={this.handleChange} noValidate />
                    {errors.swnf.length > 0 && 
                        <span className='error'>{errors.swnf}</span>}
                </div>
                <div className='swnl'>
                    <label htmlFor="swnl">Your Social Worker's Last Name</label>
                    <input type='swnl' name='swnl' onChange={this.handleChange} noValidate />
                    {errors.swnl.length > 0 && 
                        <span className='error'>{errors.swnl}</span>}
                </div>
                <div className='swe'>
                    <label htmlFor="swe">Your Social Worker's Email</label>
                    <input type='swe' name='swe' onChange={this.handleChange} noValidate />
                    {errors.swe.length > 0 && 
                        <span className='error'>{errors.swe}</span>}
                </div>
                <div className='swnum'>
                    <label htmlFor="swnum">Your Social Worker's Number</label>
                    <input type='swnum' name='swnum' onChange={this.handleChange} noValidate />
                    {errors.swnum.length > 0 && 
                        <span className='error'>{errors.swnum}</span>}
                </div>
                <div className='fname'>
                    <label htmlFor="fname">First Name</label>
                    <input type='fname' name='fname' onChange={this.handleChange} noValidate />
                    {errors.fname.length > 0 && 
                        <span className='error'>{errors.fname}</span>}
                </div>
                <div className='lname'>
                    <label htmlFor="lname">Last Name</label>
                    <input type='lname' name='lname' onChange={this.handleChange} noValidate />
                    {errors.lname.length > 0 && 
                        <span className='error'>{errors.lname}</span>}
                </div>
                <div className='username'>
                    <label htmlFor="username">Your Desired Username</label>
                    <input type='username' name='username' onChange={this.handleChange} noValidate />
                    {errors.username.length > 0 && 
                        <span className='error'>{errors.username}</span>}
                </div>
                <div className='password'>
                    <label htmlFor="password">Your Desired Password</label>
                    <input type='password' name='password' onChange={this.handleChange} noValidate />
                    {errors.password.length > 0 && 
                        <span className='error'>{errors.password}</span>}
                </div>
                <div className='submit'>
                    <button>Create</button>
                </div>
            </form>
            </div>
        </div>
        );
    }
}

render(<App />, document.getElementById('root'));