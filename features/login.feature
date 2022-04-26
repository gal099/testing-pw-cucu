Feature: Login to the site with different users

  Scenario Outline: The user logs to the site
    Given the user is in the log in page
    When the user enters the username "<username>"
    And the user enters a password "<password>"
    Then the user login status is "<status>"

    Examples:

      | username | password  | status |
      | correct  | correct   | true   |
      | correct  | incorrect | false  |
      | correct  |           | false  |


