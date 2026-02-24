Feature: GET User API Validation

  As an API tester
  I want to validate GET user endpoint
  So that user details are correctly fetched

  Scenario Outline: Validate GET user by username
    Given I send GET request for user "<username>"
    Then the response status code should be "<statusCode>"
    And the response should contain username "<username>"

    Examples:
      | username | statusCode |
      | deva123    | 200        |
    #  | user2    | 200        |
    #  | user3    | 404        |
      | user4    | 404        |
