import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event/> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('Render event component', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('Event div is render', () => {
    expect(EventWrapper.find('.Event')).toHaveLength(1);
  })

  test('render event__Overview', () => {
    expect(EventWrapper.find('.event__Overview')).toHaveLength(1);
  })

  test('render event_Overview children', () => {
    expect(EventWrapper.find('.event__Overview').children()).toHaveLength(4)
  })

  test('render event_Details children', () => {
    EventWrapper.setState({
      showDetails: true
    })
    expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
  })

  test('render show/hide button', () => {
    expect(EventWrapper.find('.event__Overview button').children()).toHaveLength(1);
  })

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    })
    EventWrapper.find('.event__Overview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  })
  test('set mock eventdata as state', () => {
    EventWrapper.setState({
      event: {
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
        },
        "is_online_event": false,
        "group": {
          "created": 1467235816000,
          "name": "DigitalCrafts | Learn to Code in Houston",
          "id": 20129365,
          "join_mode": "open",
          "lat": 29.799999237060547,
          "lon": -95.55999755859375,
          "urlname": "learn-to-code-in-houston-digitalcrafts",
          "who": "Members",
          "localized_location": "Houston, TX",
          "state": "TX",
          "country": "us",
          "region": "en_US",
          "timezone": "US/Central"
        },
        "link": "https://www.meetup.com/learn-to-code-in-houston-digitalcrafts/events/268299154/",
        "description": "<p>Join us for a Demo Day celebration and networking event in honor of the newest grads of our Immersive Web Development bootcamp.</p> <p>You'll have the opportunity to meet our grads as they demo their capstone projects, showing off all they've learned in their time with us. We'll have a brief presentation about 30 minutes in, but you can drop in any time and stay as long as you like. Throughout the event, food and drinks are on us!</p> <p>If you're looking to hiring your next teammate, a prospective student or a friend or family member, you'll find plenty of inspiration and great talent amongst our students. We couldn't be more excited for our graduating class, and we hope to see you there as we welcome Houston's newest tech talent!</p> ",
        "visibility": "public",
        "pro_is_email_shared": false,
        "member_pay_fee": false
      }
    });
    expect(EventWrapper.state('event').name).toBe('DigitalCrafts Demo Day Happy Hour & Talent Showcase!')
  });
})