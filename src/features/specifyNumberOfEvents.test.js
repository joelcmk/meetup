import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the user hasn’t changed default number of events to display', () => {


    });

    when('the user is viewing the events list', () => {
      AppWrapper = mount(<NumberOfEvents />);
    });

    then('32 events will be displayed', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user decides to change the number of events displayed', () => {
      AppWrapper = mount(<App />);
    });

    when('the user is viewing the events list', () => {
      AppWrapper.find('#numberOfEvents__input').simulate('change', { target: { value: 15 } });
    });

    then('the desired number of events specified by the user will be displayed', () => {
      const EventWrapper = AppWrapper.find(NumberOfEvents)
      expect(EventWrapper.state('numberOfEvents')).toEqual(15);
    });
  });

});
