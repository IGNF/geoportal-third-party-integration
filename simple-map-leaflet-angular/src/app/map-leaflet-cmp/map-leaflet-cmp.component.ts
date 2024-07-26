import { Component, OnInit } from '@angular/core';

import L from "leaflet";
// import * as Gp from 'geoportal-extensions-leaflet';

import {Services, LExtended} from 'geoportal-extensions-leaflet';

@Component({
  selector: 'app-map-leaflet-cmp',
  templateUrl: './map-leaflet-cmp.component.html',
  styleUrls: [
  './map-leaflet-cmp.component.css'
  ]
})

export class MapLeafletCmpComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        var createMap = function() {
            // Création de la map
            var layer = LExtended.geoportalLayer.WMTS({
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

        Services.getConfig({
            apiKey: "essentiels,ortho,cartes,administratif,decouverte",
            timeOut : 20000,
            onSuccess : createMap
        });
    }

}
