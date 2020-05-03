Feature: Show/Hide An Event's Details

  Scenario: An event element is collapsed by default
    Given the user has selected a city
    When the user is viewing the result
    Then the events for that city will display and the event elements will be collapsed

  Scenario: User can expand an event to see its details
    Given the user wants more information on a particular event
    When the user is viewing the results of their chosen city
    Then the events for that city will display and the user will be able to click on an event which will reveal its details

  Scenario: User can collapse an event to hide its details
    Given the user no longer wants to see the details of an event
    When the user is viewing the details of a particular event
    Then the user will be able to click on an event which will hide its details