import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (

    <div className="welcome-signin-createaccount-pages mb-2 flex-column text-center overflow-none">
      <div className="eventListTitle m-5 headers-font-ubuntu">
        <h2>Welcome</h2>
      </div>
      <div className="liked-event-location text-wrap block-text-font-oswald text-center m-4"><h4>
        Local Sports helps you select the perfect pick-up sporting event.
        <br></br>
        <br></br>
        Filter by your sport of choice, day of choice, and location of choice, then go out and play!
      </h4>
      </div>
      <div className='button m-5 headers-font-ubuntu'>
        <div className='button mt-2 headers-font-ubuntu col-12'>
          <Link to='/signIn' >
            <button className='btn block submit-button'>Sign In</button>
          </Link>
          <Link to='/createAccount' >
            <button className='btn block submit-button mt-3'>Create an Account</button>
          </Link>
          {/* <Link to= '/search' >
          <button className='btn btn-primary block mt-2 skip-button'>Skip
            <i className="fas fa-chevron-right ml-2"></i>
          </button>
        </Link> */}

        </div>
      </div>
    </div>
  );
}

export default Welcome;
