Package.describe({
  name: 'rcy:soft-setting',
  summary: 'Retrieve values from Meteor.settings without errors',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('soft-setting.js');
  api.export('softSetting');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rcy:soft-setting');
  api.addFiles('soft-setting-tests.js');
});
