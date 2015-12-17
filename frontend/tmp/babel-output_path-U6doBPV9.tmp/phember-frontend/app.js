define('phember-frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'phember-frontend/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _phemberFrontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _phemberFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _phemberFrontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _phemberFrontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});