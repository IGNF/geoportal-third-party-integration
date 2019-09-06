import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('alti');
  this.route('geocode');
  this.route('reversegeocode');
  this.route('isocurve');
  this.route('route');
  this.route('autocomplete');
  this.route('getconfig');
});

export default Router;
