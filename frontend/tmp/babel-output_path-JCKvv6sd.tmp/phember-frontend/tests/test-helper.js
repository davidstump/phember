define('phember-frontend/tests/test-helper', ['exports', 'phember-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _phemberFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_phemberFrontendTestsHelpersResolver['default']);
});