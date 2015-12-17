define('phember-frontend/router', ['exports', 'ember', 'phember-frontend/config/environment'], function (exports, _ember, _phemberFrontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _phemberFrontendConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('posts', function () {
      this.route('new');
      this.route('post', { path: '/:post_id' }, function () {
        this.route('edit');
      });
    });
  });

  exports['default'] = Router;
});