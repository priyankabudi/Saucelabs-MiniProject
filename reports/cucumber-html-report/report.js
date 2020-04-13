$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/priya/saucelabs/features/home.feature");
formatter.feature({
  "line": 2,
  "name": "Swaglab Website",
  "description": "I want to use this template for my feature file",
  "id": "swaglab-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Swaglabs"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Filtering the products",
  "description": "",
  "id": "swaglab-website;filtering-the-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SwagLabs_TS2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user launches the webapplication",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user clicks the dropdown button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user selects the required filter",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterPage.user_launches_the_webapplication()"
});
formatter.result({
  "duration": 7297169900,
  "status": "passed"
});
formatter.match({
  "location": "FilterPage.the_user_clicks_the_dropdown_button()"
});
formatter.result({
  "duration": 258795500,
  "status": "passed"
});
formatter.match({
  "location": "FilterPage.the_user_selects_the_required_filter()"
});
formatter.result({
  "duration": 3135931100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Viewing the Product",
  "description": "",
  "id": "swaglab-website;viewing-the-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SwagLabs_TS3"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user clicks the product",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the item will opens",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.user_clicks_the_product()"
});
formatter.result({
  "duration": 8368566700,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.the_item_will_opens()"
});
formatter.result({
  "duration": 98267000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Adding product to cart",
  "description": "",
  "id": "swaglab-website;adding-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SwagLabs_TS4"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user opens the product",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on the cart button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "cart will be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingProductPage.user_opens_the_product()"
});
formatter.result({
  "duration": 6382480500,
  "status": "passed"
});
formatter.match({
  "location": "AddingProductPage.user_clicks_on_the_cart_button()"
});
formatter.result({
  "duration": 6221660600,
  "status": "passed"
});
formatter.match({
  "location": "AddingProductPage.cart_will_be_opened()"
});
formatter.result({
  "duration": 1928711300,
  "status": "passed"
});
});