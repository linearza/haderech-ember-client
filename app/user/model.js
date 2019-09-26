import DS from 'ember-data';
import { memberAction } from 'ember-api-actions';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  admin: DS.attr(),
  confirmed: DS.attr(),

  confirmUser: memberAction({ path: 'confirm-user' }),
  deconfirmUser: memberAction({ path: 'deconfirm-user' })
});
