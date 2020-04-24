import React, { Component } from 'react';

class Event extends Component {

  state = {
    showDetails: false
  }

  handleShowDetails = (value) => {
    this.setState({ showDetails: value })
  }

  render() {
    const showDetails = this.state.showDetails;
    return (
      <div className="Event">
        <div className="event__Overview">
          <p></p>
          <p></p>
          <p></p>
          {showDetails &&
            <button onClick={() => this.handleShowDetails(false)}>Show Less</button>
          }
          {!showDetails &&
            <button onClick={() => this.handleShowDetails(true)}>Show More</button>
          }
        </div>
        {showDetails &&
          <div className="event__Details">
            <p className="event__Details--description"></p>
          </div>
        }
      </div>
    );
  }
}

export default Event;