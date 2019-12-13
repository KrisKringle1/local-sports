import React from 'react';
import { Link } from 'react-router-dom';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      // Monday: true,
      // Tuesday: true,
      // Wednesday: true,
      // Thursday: true,
      // Friday: true,
      // Saturday: true,
      // Sunday: true
    };
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick(day) {
    this.setState({
      [day]: !this.state[day]
    });

    if (this.props.schedule.includes(day)) {
      setTimeout(() => { this.props.removeFromSchedule(day); }, 300);
    } else {
      setTimeout(() => { this.props.addToSchedule(day); }, 300);
    }
  }

  handleSignOut() {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    };
    fetch('/api/logout', req)
      .then(data => data.json())
      .then(data => data);
  }

  render() {
    return (
      <div className="eventList mt-3 flex-column text-center">
        <div className="eventListTitle mt-2 mb-4 headers-font-ubuntu">
          <h2>Schedule</h2>
        </div>
        <div className="d-flex flex-column ml-5 mr-5 mb-2">
          {this.state.schedule.map((day, index) => {
            return (
              <h4 className={`${this.props.days[day] ? 'not-active-day' : 'liked-event-border'} text-center p-1 mb-3 block-text-font-oswald`}
                key={index}
                onClick={() => this.handleEventClick(day)}>{day}</h4>
            );
          })}
        </div>
        <div className="eventListTitle headers-font-ubuntu">
          <h2>Sign Out</h2>
          <Link to='/signIn'>
            <button className="bg-white m-3 heart-div-button"
              onClick={this.handleSignOut}>
              <i className="fas fa-sign-out-alt fa-2x" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Settings;
