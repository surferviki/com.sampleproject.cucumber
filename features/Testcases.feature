#Author: Vignesh Ganesaputarjunan
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
@tag
Feature: Test Login credentials for GitHub

  @tag1
  Scenario: Valid login
    Given I navigate to Github page
    When I enter the "surfer.viki@gmail.com"
    And I type the "Wipro@123"
    Then I should login successfully

  #Scenario Outline: Valid login with parameters
    #Given I navigate to Github page
    #When I enter the "<username>" 
    #And I type the "password"
    #Then I should login successfully
    #
    #Examples:
       #|username     | password  |
       #|surfer.viki@gmail.com| Wipro|