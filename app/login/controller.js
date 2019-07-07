import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),

  actions: {
    authenticate: function() {
      const credentials = this.getProperties('email', 'password');
      const authenticator = 'authenticator:token'; // or 'authenticator:jwt'

      this.get('session').authenticate(authenticator, credentials).then(() =>{
        // redirect on success
      })
    }
  }
});
