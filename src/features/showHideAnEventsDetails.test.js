import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper
    given("the user has selected a city", () => {

    });

    when('the user is viewing the result', () => {
      AppWrapper = mount(<App />);
    });

    then('the events for that city will display and the event elements will be collapsed', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({ given, when, then }) => {
    let AppWrapper
    given("the user wants more information on a particular event", () => {

    });

    when("the user is viewing the results of their chosen city", () => {
      AppWrapper = mount(<App />);
    });

    then("the events for that city will display and the user will be able to click on an event which will reveal its details", () => {
      AppWrapper.update();
      AppWrapper.find('.eventButton').at(0).simulate('click');
      expect(AppWrapper.find('.event__Details')).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({ given, when, then }) => {
    let AppWrapper
    given("the user no longer wants to see the details of an event", () => {
      AppWrapper = mount(<App />);
    });

    when("the user is viewing the details of a particular event", () => {
      AppWrapper.update();
      AppWrapper.find('.eventButton').at(0).simulate('click');
      expect(AppWrapper.find('.event__Details')).toHaveLength(1);
    });

    then("the user will be able to click on an event which will hide its details", () => {
      AppWrapper.find('.eventButton').at(0).simulate('click');
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });

  });
});
