$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testcases.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Vignesh Ganesaputarjunan"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    }
  ],
  "line": 6,
  "name": "Test Login credentials for GitHub",
  "description": "",
  "id": "test-login-credentials-for-github",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Valid login",
  "description": "",
  "id": "test-login-credentials-for-github;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I navigate to Github page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter the \"surfer.viki@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I type the \"Wipro@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Testcases.I_navigate_to_Github_page()"
});
formatter.result({
  "duration": 2932600787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surfer.viki@gmail.com",
      "offset": 13
    }
  ],
  "location": "Testcases.I_enter_the_username(String)"
});
formatter.result({
  "duration": 102821993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wipro@123",
      "offset": 12
    }
  ],
  "location": "Testcases.I_type_the_password(String)"
});
formatter.result({
  "duration": 65464641,
  "status": "passed"
});
formatter.match({
  "location": "Testcases.I_should_login_successfully()"
});
formatter.result({
  "duration": 631313983,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Valid login with parameters",
  "description": "",
  "id": "test-login-credentials-for-github;valid-login-with-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I navigate to Github page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I type the \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "test-login-credentials-for-github;valid-login-with-parameters;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "test-login-credentials-for-github;valid-login-with-parameters;;1"
    },
    {
      "cells": [
        "surfer.viki@gmail.com",
        "Wipro"
      ],
      "line": 23,
      "id": "test-login-credentials-for-github;valid-login-with-parameters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Valid login with parameters",
  "description": "",
  "id": "test-login-credentials-for-github;valid-login-with-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to Github page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the \"surfer.viki@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I type the \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Testcases.I_navigate_to_Github_page()"
});
formatter.result({
  "duration": 2007144067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surfer.viki@gmail.com",
      "offset": 13
    }
  ],
  "location": "Testcases.I_enter_the_username(String)"
});
formatter.result({
  "duration": 85691672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    }
  ],
  "location": "Testcases.I_type_the_password(String)"
});
formatter.result({
  "duration": 57403114,
  "status": "passed"
});
formatter.match({
  "location": "Testcases.I_should_login_successfully()"
});
formatter.result({
  "duration": 737869720,
  "status": "passed"
});
});