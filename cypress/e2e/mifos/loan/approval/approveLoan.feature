Feature: Loan Approval

  Scenario: Successfully aprove a loan
    Given I am logged into the Mifos application
    When I navigate to a user account page
    And I navigate to the user's loan list
    And I select an unapproved load
    And I clicked on approve
    Then I should see a loan approval form
    When I fill the loan approval form
    And I click on submit button
    Then I should be taken to the loan detail page
    And Undo approval and disburse button should be visible

