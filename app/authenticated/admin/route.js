import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Route.extend({

  flashMessages: service(),

  beforeModel(transition){
    this._super(...arguments);

    if (!this.get('currentUser.user.admin')){
      transition.abort();
      console.log('Not admin!');
      this.transitionTo('index');
    }
  },

  setupController(controller){
    this._super(...arguments);

    controller.set('users', this.store.findAll('user'));

  },

  actions: {
    confirmUser(user){
      user.confirmUser().then((res) => {
        this.get('store').pushPayload(res);
        this.flashMessages.success(`Successfully confirmed ${user.get('name')}!`);
      }).catch((e) =>{
        this.flashMessages.success('Failed confirmation!');
      })
    },

    deconfirmUser(user){
      user.deconfirmUser().then((res) => {
        this.get('store').pushPayload(res);
        this.flashMessages.success(`Successfully deconfirmed ${user.get('name')}.`);
      }).catch((e) =>{
        this.flashMessages.success('Failed deconfirmation!');
      })
    }
  }

});
