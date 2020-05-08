import React, { Component } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

class Event extends Component {
  state = {
    showDetails: false,
    events: []
  };

  handleShowDetails = (value) => {
    this.setState({ showDetails: value });
  };

  getData = () => {
    return [{ name: 'Reservations', value: this.props.event.rsvp_limit }, { name: 'Free slots', value: this.props.event.yes_rsvp_count }]
  }

  render() {
    const colors = ['#89d48a', '#d77056'];
    const showDetails = this.state.showDetails;
    return (
      <div className="event Event">
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
            <div
              className="event__Details--description"
              dangerouslySetInnerHTML={{ __html: this.props.event.description }}
            ></div>
            <div className='chart'>
              {this.props.event.rsvp_limit && (
                <ResponsiveContainer height={400}>
                  <PieChart width={730} height={250}>
                    <Pie data={this.getData()} cx="50%" cy="50%" outerRadius={80} label>
                      {
                        this.getData().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                      }
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
