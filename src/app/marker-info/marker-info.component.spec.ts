import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Airport } from '../types';
import { AirportsService } from '../airports.service';
import { MarkerInfoComponent } from './marker-info.component';

describe('MarkerInfoComponent', () => {
  let component: MarkerInfoComponent;
  let fixture: ComponentFixture<MarkerInfoComponent>;
  let airportSubject: BehaviorSubject<Airport | null>;

  beforeEach(async () => {
    airportSubject = new BehaviorSubject<Airport | null>(null);

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [
        {
          provide: AirportsService,
          useValue: { selectedAirport$: airportSubject.asObservable() },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
