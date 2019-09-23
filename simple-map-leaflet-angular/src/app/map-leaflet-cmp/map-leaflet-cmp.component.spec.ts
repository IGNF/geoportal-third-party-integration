Leafletleafletimport { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLeafletCmpComponent } from './map-openlayers-cmp.component';

describe('MapLeafletCmpComponent', () => {
  let component: MapLeafletCmpComponent;
  let fixture: ComponentFixture<MapLeafletCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLeafletCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLeafletCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
