Feature: Loan Account Creation

  Scenario: Successfully create a loan account
    Given I am logged into the Mifos application
    When I navigate to the loan account creation page
    And I fill in the required loan details
    And I submit the loan application
    Then I should see a confirmation message indicating the loan account has been successfully created
    And I should see the new loan account in the loan accounts list

# Scenario: Fail to create a loan account with missing details
#   Given I am logged into the Mifos application
#   When I navigate to the loan account creation page
#   And I fill in the loan details with missing required fields
#   And I submit the loan application
#   Then I should see an error message indicating the missing required fields
#   And the loan account should not be created
