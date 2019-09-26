export function initialize( application ) {
  application.inject('controller', 'currentUser', 'service:currentUser');
  application.inject('route', 'currentUser', 'service:currentUser');
}

export default {
  name: 'global-injects',
  initialize
};
