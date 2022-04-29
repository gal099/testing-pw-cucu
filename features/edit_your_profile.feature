Feature: Edit Your Profile

  Background: the user is logged on profile section tab
    Given the user is logged in
    And the user is in the user profile section tab

  Scenario: edit first name
    When the user edit the first name
    And the user saves the changes
    Then the changes should be saved

  Scenario: edit last name
    When the user edit the last name
    And the user saves the changes
    Then the changes should be saved
  
  Scenario: edit your country
    When the user edit the country
    And the user saves the changes
    Then the changes should be saved 

  Scenario: edit your gender
    When the user edit the gender
    And the user saves the changes
    Then the changes should be saved     