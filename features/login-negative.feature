@digital-skola @login
Feature: Swag Labs - Login - Negative

   Scenario: As a locked_out_user, I should get alert
    Given I am on the login page
    When I login with "locked_out_user"
    Then I should see error "Epic sadface: Sorry, this user has been locked out."
