import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(transition){
    this._super(...arguments);

    if (!this.get('currentUser.user.admin')){
      transition.abort();
      console.log('Not admin!');
      this.transitionTo('index');
    }
  }

});
