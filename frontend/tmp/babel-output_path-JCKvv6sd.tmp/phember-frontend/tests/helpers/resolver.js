define('phember-frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'phember-frontend/config/environment'], function (exports, _emberResolver, _phemberFrontendConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _phemberFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _phemberFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});