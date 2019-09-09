import { Component, OnInit } from '@angular/core';

import {View, Map } from 'ol';
// import * as Gp from 'geoportal-extensions-openlayers';

import {Services, olExtended} from 'geoportal-extensions-openlayers';

@Component({
  selector: 'app-map-openlayers-cmp',
  templateUrl: './map-openlayers-cmp.component.html',
  styleUrls: [
  './map-openlayers-cmp.component.css'
  ]
})

export class MapOpenlayersCmpComponent implements OnInit {

  constructor() { }

    ngOnInit() {
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
                    zoom : 8
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
    }

}
