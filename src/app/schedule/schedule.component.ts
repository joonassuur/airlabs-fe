import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NextDeparturesService } from '../next-departures.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Flight, Status } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  flightData: Flight[] = [];
  nextDepartures: Flight[] = [];
  sortedNextDepartures: Flight[] = [];
  loading = false;

  constructor(
    private nextDeparturesService: NextDeparturesService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      const iataCode = params['iata_code'];
      const icaoCode = params['icao_code'];

      const airport = iataCode
        ? `dep_iata=${iataCode}`
        : `dep_icao=${icaoCode}`;

      this.apiService
        .fetchFlightSchedules(airport)
        .subscribe((response: Flight[]) => {
          const sortedFlights = response.sort(
            (a, b) =>
              new Date(a.dep_time).getTime() - new Date(b.dep_time).getTime()
          );
          const sorted = sortedFlights.slice(0, 5);
          this.sortedNextDepartures = sorted;
          this.nextDeparturesService.updateSortedNextDepartures(sorted);
          this.loading = false;
        });
    });
  }

  getStatusColor(status: Status): string {
    switch (status) {
      case Status.scheduled:
        return 'bg-blue-200';
      case Status.active:
        return 'bg-green-200';
      case Status.landed:
        return 'bg-yellow-200';
      case Status.cancelled:
        return 'bg-red-200';
      default:
        return '';
    }
  }
}
