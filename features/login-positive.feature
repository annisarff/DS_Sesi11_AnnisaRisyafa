@digital-skola @login
Feature: Swag Labs - Login - Positive

  Scenario: As a standard_user, I can log in successfully
    Given I am on the login page
    When I login with "standard_user"
    Then I should see home page


 