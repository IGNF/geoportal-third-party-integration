import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
// composants
import MyCptAlti from "./components/MyCptAlti";
import MyCptGetConfig from "./components/MyCptGetConfig";
import MyCptGeocode from "./components/MyCptGeocode";
import MyCptAutoComplete from "./components/MyCptAutoComplete";
import MyCptRoute from "./components/MyCptRoute";
import MyCptIsoCurve from "./components/MyCptIsoCurve";
import MyCptReverseGeocode from "./components/MyCptReverseGeocode";
// lib
// import Gp from "geoportal-access-lib";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes : [
        { path: '/geocode', component: MyCptGeocode },
        { path: '/autocomplete', component: MyCptAutoComplete },
        { path: '/reversegeocode', component: MyCptReverseGeocode },
        { path: '/alti', component: MyCptAlti },
        { path: '/route', component: MyCptRoute },
        { path: '/isocurve', component: MyCptIsoCurve },
        { path: '/getconfig', component: MyCptGetConfig }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
