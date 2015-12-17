define('phember-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'phember-frontend/tests/helpers/start-app', 'phember-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _phemberFrontendTestsHelpersStartApp, _phemberFrontendTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _phemberFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _phemberFrontendTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});