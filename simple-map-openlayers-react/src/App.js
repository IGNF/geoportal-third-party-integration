import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ol from 'openlayers';
import * as Gp from 'geoportal-extensions-openlayers';

// import {Services, olExtended as Ol} from 'geoportal-extensions-openlayers';

import '../node_modules/geoportal-extensions-openlayers/dist/GpPluginOpenLayers.css';
import '../node_modules/openlayers/dist/ol.css';

class App extends Component {
    render() {

          var createMap = function() {
              var map = new Ol.Map({
                  target : "map",
                  layers : [
                      new Ol.layer.GeoportalWMTS({
                          layer : "GEOGRAPHICALGRIDSYSTEMS.MAPS"
                      })
                  ],
                  view : new Ol.View({
                      center : [288074.8449901076, 6247982.515792289],
                      zoom : 6
                  })
              });

                var drawing = new Ol.control.Drawing();
                map.addControl(drawing);
                var iso = new Ol.control.Isocurve();
                map.addControl(iso);
                var layerImport = new Ol.control.LayerImport();
                map.addControl(layerImport);
                var layerSwitcher = new Ol.control.LayerSwitcher();
                map.addControl(layerSwitcher);
                var mp = new Ol.control.GeoportalMousePosition();
                map.addControl(mp);
                var route = new Ol.control.Route();
                map.addControl(route);
                var reverse = new Ol.control.ReverseGeocode({});
                map.addControl(reverse);
                var search = new Ol.control.SearchEngine({});
                map.addControl(search);

                var measureLength = new Ol.control.MeasureLength();
                map.addControl(measureLength);
                var measureArea = new Ol.control.MeasureArea();
                map.addControl(measureArea);
                var measureAzimuth = new Ol.control.MeasureAzimuth();
                map.addControl(measureAzimuth);
                var measureProfil = new Ol.control.ElevationPath();
                map.addControl(measureProfil);

                var attributions = new Ol.control.GeoportalAttribution();
                map.addControl(attributions);
        }

          Gp.Services.getConfig({
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
