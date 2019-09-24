import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import {
  inject as service
} from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {

  currentUser: service(),
  routeAfterAuthentication: 'authenticated.index',

  beforeModel() {
    // this.transitionTo('index');
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('currentUser').load().catch((e) => {
      console.log('Auth failure: ', e);
      this.get('session').invalidate()
    });
  }

});
