define('phember-frontend/tests/routes/posts/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts/post.js should pass jshint.');
  });
});