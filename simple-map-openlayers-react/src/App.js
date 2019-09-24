import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {View, Map } from 'ol';

import {Services, olExtended} from 'geoportal-extensions-openlayers';

import '../node_modules/geoportal-extensions-openlayers/dist/GpPluginOpenLayers.css';
import '../node_modules/ol/ol.css';

class App extends Component {
    render() {

          var createMap = function() {
              var map = new Map({
                  target : "map",
                  layers : [
                      new olExtended.layer.GeoportalWMTS({
                          layer : "GEOGRAPHICALGRIDSYSTEMS.MAPS"
                      })
                  ],
                  view : new View({
                      center : [288074.8449901076, 6247982.515792289],
                      zoom : 6
                  })
              });

                var drawing = new olExtended.control.Drawing();
                map.addControl(drawing);
                var iso = new olExtended.control.Isocurve();
                map.addControl(iso);
                var layerImport = new olExtended.control.LayerImport();
                map.addControl(layerImport);
                var layerSwitcher = new olExtended.control.LayerSwitcher();
                map.addControl(layerSwitcher);
                var mp = new olExtended.control.GeoportalMousePosition();
                map.addControl(mp);
                var route = new olExtended.control.Route();
                map.addControl(route);
                var reverse = new olExtended.control.ReverseGeocode({});
                map.addControl(reverse);
                var search = new olExtended.control.SearchEngine({});
                map.addControl(search);

                var measureLength = new olExtended.control.MeasureLength();
                map.addControl(measureLength);
                var measureArea = new olExtended.control.MeasureArea();
                map.addControl(measureArea);
                var measureAzimuth = new olExtended.control.MeasureAzimuth();
                map.addControl(measureAzimuth);
                var measureProfil = new olExtended.control.ElevationPath();
                map.addControl(measureProfil);

                var attributions = new olExtended.control.GeoportalAttribution();
                map.addControl(attributions);
        }

        Services.getConfig({
            apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
            timeOut : 20000,
            onSuccess : createMap
         });

        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div id="map"></div>

            </div>
        );
    }
}

export default App;
