Feature: login
  As a user
  I want to log in
  So that I can gain access to the system


  Scenario: user logs in
    When user "standard_user" logs in
    Then the user should be in the inventory page
    And user logs out

  Scenario: user cannot login
    When user "locked_out_user" tries to log in
    Then user should not be able to log in
