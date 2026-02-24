Feature: PUT Update User API

  Scenario Outline: Update multiple users successfully
    Given User prepares update payload for "<username>" with id <id>
    When User sends PUT request to update "<username>"
    Then Response status code should be <statusCode>
    And Response body should contain code <statusCode>

    Examples:
      | id  | username | statusCode |
      | 101 | deva123    | 200        |
      | 102 | user2    | 200        |
      | 103 | user3    | 405       |
