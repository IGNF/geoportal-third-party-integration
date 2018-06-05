import React, { Component } from 'react';

 // leaflet
import L from "leaflet/dist/leaflet-src";
import "leaflet/dist/leaflet.css";
// extensions
import Gp from "geoportal-extensions-leaflet/dist/GpPluginLeaflet-src";
import "geoportal-extensions-leaflet/dist/GpPluginLeaflet-src.css";

// App component - represents the whole app
export default class App extends Component {
  render() {
    function createMap () {

        // Création de la map
        var layer = L.geoportalLayer.WMS({
          layer : "ORTHOIMAGERY.ORTHOPHOTOS"
        });
    
        var map  = L.map('map', {
          zoom : 19,
          center : L.latLng(48.8449, 2.4245)
        });
    
        layer.addTo(map);
    
        // Ajout des extensions 
        var iso = L.geoportalControl.Isocurve();
        map.addControl(iso);
        var layerSwitcher = L.geoportalControl.LayerSwitcher();
        map.addControl(layerSwitcher);
        var mp = L.geoportalControl.MousePosition();
        map.addControl(mp);
        var route = L.geoportalControl.Route();
        map.addControl(route);
        var reverse = L.geoportalControl.ReverseGeocode();
        map.addControl(reverse);
        var search = L.geoportalControl.SearchEngine();
        map.addControl(search);
        var measureProfil = L.geoportalControl.ElevationPath();
        map.addControl(measureProfil);
    }
    
    // Pour la configuration des services
    Gp.Services.getConfig({
        apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
        onSuccess : createMap
    });

    return (
      <div className="container">
        <div id="map"></div>
      </div>
    );
  }
}
