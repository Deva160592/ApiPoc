Feature: DELETE User API Validation

  As an API tester
  I want to validate DELETE user endpoint
  So that users can be deleted correctly

  Scenario Outline: Validate DELETE user by username
    Given I send DELETE request for user "<username>"
    Then the delete response status code should be "<statusCode>"

    Examples:
      | username | statusCode |
      | deva234    | 200        |
      | user4    | 404        |
      | invalid  | 404        |
