import { Component, OnInit } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Airport } from '../types';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-airport-details',
  standalone: true,
  imports: [ScheduleComponent, RouterModule, CommonModule],
  templateUrl: './airport-details.component.html',
  styleUrl: './airport-details.component.scss',
})
export class AirportDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  airports: Airport[] = [];
  selectedAirport: Airport | null = null;

  ngOnInit(): void {
    this.apiService.fetchAirports().subscribe((airports) => {
      this.route.queryParams.subscribe((params) => {
        const iataCode = params['iata_code'];
        const icaoCode = params['icao_code'];

        const selected = airports.filter((currentAirport: Airport) => {
          return (
            currentAirport.iata_code === iataCode ||
            currentAirport.icao_code === icaoCode
          );
        });
        this.selectedAirport = selected[0];
      });
    });
  }
}
