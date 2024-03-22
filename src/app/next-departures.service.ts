import { Injectable } from '@angular/core';
import { Flight } from './types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NextDeparturesService {
  constructor() {}
  private sortedNextDeparturesSubject: BehaviorSubject<Flight[]> =
    new BehaviorSubject<Flight[]>([]);
  public sortedNextDepartures$: Observable<Flight[]> =
    this.sortedNextDeparturesSubject.asObservable();

  updateSortedNextDepartures(departures: Flight[]): void {
    this.sortedNextDeparturesSubject.next(departures);
  }
}
