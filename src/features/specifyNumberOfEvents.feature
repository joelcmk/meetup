Feature: Filter events by city

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user hasn’t changed default number of events to display
    When the user is viewing the events list
    Then 32 events will be displayed
  Scenario: User can change the number of events they want to see
    Given the user decides to change the number of events displayed
    When the user is viewing the events list
    Then the desired number of events specified by the user will be displayed
