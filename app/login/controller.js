import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),

  errorMessage: null,

  actions: {
    authenticate() {
      const credentials = this.getProperties('email', 'password');
      const authenticator = 'authenticator:token'; // or 'authenticator:jwt'

      this.get('session').authenticate(authenticator, credentials).then(() =>{
        // redirect on success
      }).catch((e) => {
        this.set('errorMessage', JSON.parse(e.text).error);
        console.log('error', e)
      })
    }
  }
});
