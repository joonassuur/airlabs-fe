import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { environment } from './environment';
import { Airport } from './types';
import { Flight } from './types';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch flight schedules', () => {
    const airportCode = 'JFK';
    const mockFlights: Flight[] = [
      // Define your mock Flight objects here
    ];

    service.fetchFlightSchedules(airportCode).subscribe((flights) => {
      expect(flights).toEqual(mockFlights);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}v9/schedules?${airportCode}&api_key=${environment.apiKey}&limit=5`
    );
    expect(req.request.method).toBe('GET');

    req.flush({ request: null, response: mockFlights });
  });

  it('should fetch airports', () => {
    const mockAirports: Airport[] = [
      // Define your mock Airport objects here
    ];

    service.fetchAirports().subscribe((airports) => {
      expect(airports).toEqual(mockAirports);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}v9/airports?country_code=NO&api_key=${environment.apiKey}`
    );
    expect(req.request.method).toBe('GET');

    req.flush({ response: mockAirports });
  });
});
