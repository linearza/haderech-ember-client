import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {
    path: ''
  });
  this.route('login');
  this.route('authenticated', { path: 'member' }, function() {
    // all routes that require the session to be authenticated
    this.route('index', {
      path: ''
    });
  });
});

export default Router;
