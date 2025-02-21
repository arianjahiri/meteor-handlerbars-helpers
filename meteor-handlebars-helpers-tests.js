// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-handlebars-helpers.js.
import { name as packageName } from "meteor/arianjahiri:meteor-handlebars-helpers";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-handlebars-helpers - example', function (test) {
  test.equal(packageName, "meteor-handlebars-helpers");
});
