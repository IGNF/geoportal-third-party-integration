import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSDK3DCmpComponent } from './map-SDK3D-cmp.component';

describe('MapSDK3DCmpComponent', () => {
  let component: MapSDK3DCmpComponent;
  let fixture: ComponentFixture<MapSDK3DCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSDK3DCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSDK3DCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
