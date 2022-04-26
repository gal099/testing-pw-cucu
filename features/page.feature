Feature: Login to the site

  Scenario: A user logs to the site
    Given a user is in the log in page
    When a user enters the correct username and correct password
    Then a user is logged in to the system