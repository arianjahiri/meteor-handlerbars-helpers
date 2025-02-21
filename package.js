Package.describe({
  name: 'arianjahiri:meteor-handlebars-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.1.2');
  api.use('ecmascript');

  api.use([
    'ui',
    'session',
    'deps'
  ], 'client');
  api.use('underscore', ['client', 'server']);

  api.export('Helpers');
  api.addFiles('common.js', ['client', 'server']);
  api.addFiles('meteor-handlebars-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('arianjahiri:meteor-handlebars-helpers');
  api.mainModule('meteor-handlebars-helpers-tests.js');
});
