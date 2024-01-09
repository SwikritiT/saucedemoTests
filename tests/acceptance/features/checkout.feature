Feature: checkout
  As a user
  I want to checkout item from the cart
  So that I can get them

  Scenario: user performs checkout
    Given user "standard_user" has logged in
    And user has added item "Sauce Labs Backpack" to the cart
    When user performs checkout with following information
      | firstName  | standard |
      | lastName   | user     |
      | postalCode | 337000   |
    Then the checkout should be complete
    And user logs out
