Feature: filter item
  As a user
  I want to checkout filter item in the inventory
  So that I can sort them properly


  Scenario Outline: user filters the item
    Given user "standard_user" has logged in
    When user sorts the items from "<sortType>"
    Then the items should be sorted from "<sortType>"
    And user logs out
    Examples:
      | sortType    |
      | Z to A      |
      | A to Z      |
      | high to low |
      | low to high |
