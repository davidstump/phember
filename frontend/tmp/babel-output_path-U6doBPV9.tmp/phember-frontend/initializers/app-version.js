define('phember-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'phember-frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _phemberFrontendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_phemberFrontendConfigEnvironment['default'].APP.name, _phemberFrontendConfigEnvironment['default'].APP.version)
  };
});