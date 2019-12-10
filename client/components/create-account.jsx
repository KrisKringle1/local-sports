import React from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      isUserAccountCreated: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.updateField = this.updateField.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        confirm_password: this.state.confirmPassword
      })
    };
    fetch('/api/registration', req)
      .then(response => response.json())
      .then(data => data);
    this.displayMessage();
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  displayMessage() {
    this.setState({ isUserAccountCreated: !this.state.isUserAccountCreated });
  }

  render() {
    if (this.state.isUserAccountCreated) {
      return (
        <div className="eventList mt-2 d-flex flex-column text-center">
          <div className="createAccount headers-font-ubuntu">
            Your account has been created successfully.
          </div>
          <Link to='/search'>
            <div className='m-4'>
              <button className='btn btn-success submit-button headers-font-ubuntu'>
              Click here to continue</button>
            </div>
          </Link>
        </div>
      );
    }
    return (
      <div className="eventList mt-2 d-flex flex-column text-center">
        <div className="createAccount  headers-font-ubuntu">Create Account</div>
        <form className='form mt-4 container'
          onSubmit={this.submitForm}>
          <div className="liked-event-border p-1 mt-2">
            <input className='form-control block-text-font-oswald w-100 p-1 pl-2'
              name='username'
              type='text'
              placeholder='Username' autoComplete='off'
              value={this.state.username} required
              onChange={this.updateField}></input>
          </div>
          <div className="liked-event-border p-1 mt-2">
            <input className='form-control block-text-font-oswald w-100 p-1 pl-2'
              name='password'
              type='password'
              placeholder='Password' autoComplete='off'
              value={this.state.password} required
              onChange={this.updateField}></input>
          </div>
          <div className="liked-event-border p-1 mt-2">
            <input className='form-control block-text-font-oswald w-100 p-1 pl-2'
              name='confirmPassword'
              type='password' autoComplete='off'
              placeholder='Confirm Password'
              value={this.state.confirmPassword} required
              onChange={this.updateField}></input>
          </div>
          <div className='button m-4'>
            <button className='btn btn-success block submit-button headers-font-ubuntu'>Create Account</button>
          </div>
        </form >
      </div>
    );
  }

}
export default CreateAccount;
