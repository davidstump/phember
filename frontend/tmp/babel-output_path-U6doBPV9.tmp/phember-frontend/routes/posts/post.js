define('phember-frontend/routes/posts/post', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.store.find('post', params.post_id);
        },
        actions: {
            'delete': function _delete() {
                var _this = this;

                var post = this.currentModel;
                post.deleteRecord();
                post.save().then(function () {
                    _this.transitionTo('posts');
                });
            }
        }
    });
});