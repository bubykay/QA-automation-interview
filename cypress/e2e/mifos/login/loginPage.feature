Feature: Login Page

  Scenario: Successful login
    Given I open the login page
    When I submit the login form
    Then I should see the dashboard
