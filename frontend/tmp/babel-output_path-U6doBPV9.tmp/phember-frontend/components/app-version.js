define('phember-frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'phember-frontend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _phemberFrontendConfigEnvironment) {

  var name = _phemberFrontendConfigEnvironment['default'].APP.name;
  var version = _phemberFrontendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});