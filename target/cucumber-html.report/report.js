$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("removingitems.feature");
formatter.feature({
  "line": 2,
  "name": "To make add to cart and opening cart",
  "description": "",
  "id": "to-make-add-to-cart-and-opening-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@removeitems"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To add items to cart and open cart",
  "description": "",
  "id": "to-make-add-to-cart-and-opening-cart;to-add-items-to-cart-and-open-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user selects multiple items to add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "open cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user removes items from the cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "to-make-add-to-cart-and-opening-cart;to-add-items-to-cart-and-open-cart;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 16,
      "id": "to-make-add-to-cart-and-opening-cart;to-add-items-to-cart-and-open-cart;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 17,
      "id": "to-make-add-to-cart-and-opening-cart;to-add-items-to-cart-and-open-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "To add items to cart and open cart",
  "description": "",
  "id": "to-make-add-to-cart-and-opening-cart;to-add-items-to-cart-and-open-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@removeitems"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user selects multiple items to add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "open cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user removes items from the cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 8811187800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.i_enter_valid(String)"
});
formatter.result({
  "duration": 205011500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 6951594700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.user_selects_multiple_items_to_add_to_cart()"
});
formatter.result({
  "duration": 280243000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.open_cart()"
});
formatter.result({
  "duration": 1354501300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.user_removes_items_from_the_cart()"
});
formatter.result({
  "duration": 275944800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.application_should_be_closed()"
});
formatter.result({
  "duration": 6020121400,
  "status": "passed"
});
});