define('phember-frontend/routes/posts/post/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      save: function save() {
        var _this = this;

        var post = this.currentModel;
        post.save().then(function () {
          _this.transitionTo('posts.post', post.id);
        });
      }
    }
  });
});