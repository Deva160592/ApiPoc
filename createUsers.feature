@createUsers
Feature: Create Users With List API Validation

  As an API tester
  I want to validate POST createWithList endpoint
  So that multiple users can be created successfully

  Scenario Outline: Validate create users API
    Given I prepare user payload with id "<id>" and username "<username>"
    When I send POST request to create users
    Then the POST response status code should be "<statusCode>"
    And the POST response message should be "<message>"

    Examples:
      | id   | username | statusCode | message |
      | 1230 | deva1233    | 200        | ok      |
      | 1231 | deva2344    | 200        | ok      |
        | 1232 | deva234 | 200        | ok |
