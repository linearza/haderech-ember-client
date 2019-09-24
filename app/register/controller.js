import ENV from '../config/environment';
import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),
  flashMessages: inject(),

  user: null,

  actions: {
    register() {
      this.set('errorMessage', null);

      let self = this;
      Ember.$.ajax({
        url: ENV.APP.host + "/api/v1/users",
        type: "POST",
        data: {
          "user": {
            "name": this.get('user.name'),
            "email": this.get('user.email'),
            "password": this.get('user.password'),
            "password_confirmation": this.get('user.passwordConfirmation')
          }
        }
      }).then((res) => {
        this.flashMessages.success('Successfully registered!');
        this.transitionToRoute('register-success');
        // Transition
      }).catch(function(error) {
        self.flashMessages.danger('Oops...something went wrong!');
        self.set('errorMessage', error.responseJSON[0]);
      });

    }
  }
});
