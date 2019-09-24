import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),
  flashMessages: service(),

  user: null,

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true }).then((user) => {
        this.set('user', user);
        this.get('flashMessages').success(`Welcome back ${user.get('name')}`);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
