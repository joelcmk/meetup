import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event/> component', () => {
  let EventWrapper;
  const events = {
    "created": 1580322382000,
    "duration": 7200000,
    "id": "268299154",
    "name": "DigitalCrafts Demo Day Happy Hour & Talent Showcase!",
    "rsvp_limit": 100,
    "date_in_series_pattern": false,
    "status": "upcoming",
    "time": 1588717800000,
    "local_date": "2020-05-05",
    "local_time": "17:30",
    "updated": 1580322382000,
    "utc_offset": -18000000,
    "waitlist_count": 0,
    "yes_rsvp_count": 5,
    "venue": {
      "id": 25921660,
      "name": "The Cannon Houston",
      "lat": 29.79588508605957,
      "lon": -95.56908416748047,
      "repinned": true,
      "address_1": "1336 Brittmoore Rd.",
      "city": "Houston",
      "country": "US",
      "localized_country_name": "USA"
    }
  }
  beforeAll(() => {
    EventWrapper = shallow(<Event event={events} />);
  });

  test('Render event component', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('Event div is render', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('check to see if showDetails for events is false', () => {
    expect(EventWrapper.state('showDetails')).toBe(false)
  })

  test('check to see if meetup date is correct', () => {
    expect(EventWrapper.find('.eventDate').text()).toBe('Date: 2020-05-05');
  })

  test('Check to see if button exists', () => {
    expect(EventWrapper.find('.eventButton')).toHaveLength(1);
  })

  test('testing to see if button click changes state', () => {
    EventWrapper.find('.eventButton').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  })

})