define('phember-frontend/routes/posts/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('post');
    },
    actions: {
      save: function save() {
        var _this = this;

        var post = this.currentModel;
        post.save().then(function () {
          _this.transitionTo('posts');
        });
      }
    }
  });
});