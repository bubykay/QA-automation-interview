Feature: Loan Account Creation

  Scenario: Successfully create a loan account
    Given I am logged into the Mifos application
    When I navigate to the loan account creation page
    And I fill in the required loan details
    And I submit the loan application
    Then I should see a confirmation message indicating the loan account has been successfully created
    And I should see the new loan account in the loan accounts list


