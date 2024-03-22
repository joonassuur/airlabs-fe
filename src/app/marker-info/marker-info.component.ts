import { OnInit, Component } from '@angular/core';
import { Airport } from '../types';
import { CommonModule } from '@angular/common';
import { AirportsService } from '../airports.service';

@Component({
  selector: 'app-marker-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marker-info.component.html',
  styleUrl: './marker-info.component.scss',
})
export class MarkerInfoComponent implements OnInit {
  constructor(private airportsService: AirportsService) {}
  selectedAirport: Airport | null = null;

  ngOnInit() {
    this.airportsService.selectedAirport$.subscribe(
      (airport: Airport | null) => {
        this.selectedAirport = airport;
      }
    );
  }
}
