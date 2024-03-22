import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Airport, Flight } from '../types';
import { AirportsService } from '../airports.service';
import { MarkerInfoComponent } from '../marker-info/marker-info.component';
import { MarkerStateService } from '../marker-state.service';
import { NextDeparturesService } from '../next-departures.service';
import {
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
  GoogleMap,
} from '@angular/google-maps';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [
    RouterModule,
    GoogleMapsModule,
    CommonModule,
    MarkerInfoComponent,
    MapInfoWindow,
  ],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent implements OnInit {
  @ViewChild(GoogleMap) map: GoogleMap | undefined;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  airports: Airport[] = [];
  selectedAirport: Airport | null = null;
  selectedAirportPosition: google.maps.LatLngLiteral | undefined;
  zoom = 5;

  constructor(
    private apiService: ApiService,
    private nextDeparturesService: NextDeparturesService,
    private markerStateService: MarkerStateService,
    private airportsService: AirportsService
  ) {}

  ngOnInit() {
    this.apiService.fetchAirports().subscribe((airports) => {
      this.airports = airports;
      this.airportsService.setAirports(airports);
    });
  }

  openInfoWindow(marker: MapMarker, airport: Airport) {
    this.selectedAirport = airport;
    this.selectedAirportPosition = { lat: airport.lat, lng: airport.lng };
    this.fetchNextFlights();
    this.markerStateService.setMarkerClicked(true);
    this.airportsService.setSelectedAirport(airport);
    this.zoom = 10;
    if (this.infoWindow && this.map) {
      this.infoWindow.open(marker);
      this.map.panTo(this.selectedAirportPosition);
    }
  }

  fetchNextFlights(): void {
    if (this.selectedAirport) {
      this.apiService
        .fetchFlightSchedules(this.selectedAirport.icao_code)
        .subscribe((response: Flight[]) => {
          const sortedFlights = response.sort(
            (a, b) =>
              new Date(a.dep_time).getTime() - new Date(b.dep_time).getTime()
          );
          const sorted = sortedFlights.slice(0, 5);
          this.nextDeparturesService.updateSortedNextDepartures(sorted);
        });
    }
  }
}
