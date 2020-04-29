import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = (value) => {
    this.setState({ showDetails: value });
  };

  render() {
    const showDetails = this.state.showDetails;
    return (
      <div className="event">
        <div className="event__Overview">
          <p className="eventDate">Date: {this.props.event.local_date}</p>
          <p>
            <b>{this.props.event.name}</b>
          </p>
          <p>{this.props.event.yes_rsvp_count} people are going</p>
          {showDetails && (
            <button
              className="eventButton"
              onClick={() => this.handleShowDetails(false)}
            >
              Show Less
            </button>
          )}
          {!showDetails && (
            <button
              className="eventButton"
              onClick={() => this.handleShowDetails(true)}
            >
              Show More
            </button>
          )}
        </div>
        {showDetails && (
          <div className="event__Details">
            <p className="event__Details--description">
              {this.props.event.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
