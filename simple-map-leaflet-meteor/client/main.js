// leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// extensions
import { Services, LExtended } from "geoportal-extensions-leaflet";
import "geoportal-extensions-leaflet/dist/GpPluginLeaflet-src.css";

import './main.html';

function createMap () {

    // Création de la map
    var layer = LExtended.geoportalLayer.WMS({
      layer : "ORTHOIMAGERY.ORTHOPHOTOS"
    });

    var map  = L.map('map', {
      zoom : 19,
      center : L.latLng(48.8449, 2.4245)
    });

    layer.addTo(map);

    // Ajout des extensions
    var iso = LExtended.geoportalControl.Isocurve();
    map.addControl(iso);
    var layerSwitcher = LExtended.geoportalControl.LayerSwitcher();
    map.addControl(layerSwitcher);
    var mp = LExtended.geoportalControl.MousePosition();
    map.addControl(mp);
    var route = LExtended.geoportalControl.Route();
    map.addControl(route);
    var reverse = LExtended.geoportalControl.ReverseGeocode();
    map.addControl(reverse);
    var search = LExtended.geoportalControl.SearchEngine();
    map.addControl(search);
    var measureProfil = LExtended.geoportalControl.ElevationPath();
    map.addControl(measureProfil);
}

// Pour la configuration des services
Services.getConfig({
  apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
  onSuccess : createMap
});
