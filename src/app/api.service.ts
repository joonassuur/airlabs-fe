import { Injectable } from '@angular/core';
import { environment } from './environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Airport, Flight } from './types';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private loadingSchedulesSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public loadingSchedules$: Observable<boolean> =
    this.loadingSchedulesSubject.asObservable();

  private setLoading(value: boolean): void {
    this.loadingSchedulesSubject.next(value);
  }

  fetchFlightSchedules(airportCode: string): Observable<Flight[]> {
    this.setLoading(true);

    return this.http
      .get<{ request: any; response: Flight[] }>(
        `${environment.apiUrl}v9/schedules?${airportCode}&api_key=${environment.apiKey}&limit=5`
      )
      .pipe(
        tap(() => {
          this.setLoading(false);
        }),
        map((response) => {
          return response?.response || [];
        })
      );
  }

  fetchAirports(): Observable<Airport[]> {
    return this.http
      .get<{
        response: any;
      }>(
        `${environment.apiUrl}v9/airports?country_code=NO&api_key=${environment.apiKey}`
      )
      .pipe(
        map((response) => {
          return response?.response || [];
        })
      );
  }
}
