import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });

    if (value <= 0) {
      this.setState({
        infoText: 'Number should be at least one',
      })
    } else {
      this.setState({
        infoText: '',
      })
    }
    this.props.updateEvents(null, null, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <div className='errorAlert'>
          <ErrorAlert text={this.state.infoText} />
        </div>
        <div className='numberOfEvents__group'>
          <input
            type="number"
            id="numberOfEvents__input"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          />
          <p className='numverOfEvents_p'>Events</p>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
