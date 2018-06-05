import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapOpenlayersCmpComponent } from './map-openlayers-cmp/map-openlayers-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    MapOpenlayersCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
