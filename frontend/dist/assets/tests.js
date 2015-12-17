define('phember-frontend/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('phember-frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('phember-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('phember-frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
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
define('phember-frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('phember-frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'phember-frontend/config/environment'], function (exports, _emberResolver, _phemberFrontendConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _phemberFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _phemberFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('phember-frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('phember-frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('phember-frontend/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass jshint.');
  });
});
define('phember-frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('phember-frontend/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('phember-frontend/tests/routes/posts/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts/new.js should pass jshint.');
  });
});
define('phember-frontend/tests/routes/posts/post/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts/post');
  QUnit.test('routes/posts/post/edit.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts/post/edit.js should pass jshint.');
  });
});
define('phember-frontend/tests/routes/posts/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts/post.js should pass jshint.');
  });
});
define('phember-frontend/tests/routes/posts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/posts.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts.js should pass jshint.');
  });
});
define('phember-frontend/tests/test-helper', ['exports', 'phember-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _phemberFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_phemberFrontendTestsHelpersResolver['default']);
});
define('phember-frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('phember-frontend/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('phember-frontend/tests/unit/models/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
define('phember-frontend/tests/unit/routes/posts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:posts', 'Unit | Route | posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('phember-frontend/tests/unit/routes/posts-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/posts-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/posts-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('phember-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map