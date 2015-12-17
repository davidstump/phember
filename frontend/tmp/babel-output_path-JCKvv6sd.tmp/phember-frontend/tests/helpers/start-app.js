define('phember-frontend/tests/helpers/start-app', ['exports', 'ember', 'phember-frontend/app', 'phember-frontend/config/environment'], function (exports, _ember, _phemberFrontendApp, _phemberFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _phemberFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _phemberFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});