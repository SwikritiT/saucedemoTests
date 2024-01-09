Feature: cart
  As a user
  I want to add item to the cart
  So that I buy them later

  Scenario: user adds item to the cart
    Given user "standard_user" has logged in
    When user adds item "Test.allTheThings() T-Shirt (Red)" to the cart
    Then item "Test.allTheThings() T-Shirt (Red)" should be in the cart
    And user logs out
