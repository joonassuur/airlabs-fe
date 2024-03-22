import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsDisplayComponent } from './airports-display.component';

describe('AirportsDisplayComponent', () => {
  let component: AirportsDisplayComponent;
  let fixture: ComponentFixture<AirportsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirportsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
