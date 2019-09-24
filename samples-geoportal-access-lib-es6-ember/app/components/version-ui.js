import Component from '@ember/component';
import Gp from 'npm:geoportal-access-lib';

export default Component.extend({
    servicesVersion: Gp.servicesVersion,
    servicesDate: Gp.servicesDate
});
