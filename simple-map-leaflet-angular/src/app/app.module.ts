import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapLeafletCmpComponent } from './map-leaflet-cmp/map-leaflet-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    MapLeafletCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
