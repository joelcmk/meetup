import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import { OfflineAlert } from './Alert';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    offlineText: '',
  };

  componentDidMount() {
    this.updateEvents();
    this.offLine();
  }

  offLine = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText: 'You are offline'
      })
    }
  }

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((events) =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((events) =>
        this.setState({ events, page })
      );
    } else {
      getEvents(
        this.state.lat,
        this.state.lon,
        this.state.page
      ).then((events) => this.setState({ events }));
    }
  };

  render() {
    return (
      <div className="App">
        <h1>MY MEETUP APP</h1>
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
