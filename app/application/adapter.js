import DS from 'ember-data';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.JSONAPIAdapter.extend(TokenAuthorizerMixin, {
  namespace: 'api/v1',

  ajax(url, type, options) {
    console.log('ajax', url, type, options);
    return this._super(...arguments);
  }
});
