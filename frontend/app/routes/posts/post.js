import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('post', params.post_id);
    },
    actions: {
        delete: function() {
            var post = this.currentModel;
            post.deleteRecord();
            post.save().then(() => {
                this.transitionTo('posts');
            });
        }
    }
});
