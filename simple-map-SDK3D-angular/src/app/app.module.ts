import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapSDK3DCmpComponent } from './map-SDK3D-cmp/map-SDK3D-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    MapSDK3DCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
