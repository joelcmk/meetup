import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event'

describe('<App /> component', () => {

  test('render correct number of events', () => {
    const AppWrapper = shallow(<EventList />);
    AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
    expect(AppWrapper.find(Event)).toHaveLength(4);
  });
});