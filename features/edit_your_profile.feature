Feature: Edit Your Profile

  Background: the user is logged on profile section tab
    Given the user is logged in
    And be on user profile section tab

  Scenario: edit first name
    Given the user edit the first name
    When the user confirms the edition
    Then the changes should be saved

  Scenario: edit last name
    Given the user edit the last name
    When the user confirms the edition
    Then the changes should be saved