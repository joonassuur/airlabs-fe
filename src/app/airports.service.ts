import { Injectable } from '@angular/core';
import { Airport } from './types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  private airportsSubject: BehaviorSubject<Airport[]> = new BehaviorSubject<
    Airport[]
  >([]);
  airports$: Observable<Airport[]> = this.airportsSubject.asObservable();

  private selectedAirportSubject: BehaviorSubject<Airport | null> =
    new BehaviorSubject<Airport | null>(null);
  selectedAirport$: Observable<Airport | null> =
    this.selectedAirportSubject.asObservable();

  constructor() {}

  setAirports(airports: Airport[]): void {
    this.airportsSubject.next(airports);
  }

  getAirports(): Observable<Airport[]> {
    return this.airports$;
  }

  setSelectedAirport(airport: Airport): void {
    this.selectedAirportSubject.next(airport);
  }

  getSelectedAirport(): Observable<Airport | null> {
    return this.selectedAirport$;
  }
}
