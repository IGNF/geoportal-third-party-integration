import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOpenlayersCmpComponent } from './map-openlayers-cmp.component';

describe('MapOpenlayersCmpComponent', () => {
  let component: MapOpenlayersCmpComponent;
  let fixture: ComponentFixture<MapOpenlayersCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOpenlayersCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOpenlayersCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
