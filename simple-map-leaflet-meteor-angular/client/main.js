import angular from 'angular';
import angularMeteor from 'angular-meteor';
import mapCpt from '../imports/components/mapCpt/mapCpt';

angular.module('simple-map-leaflet-meteor-ng', [
  angularMeteor,
  mapCpt.name
]);
