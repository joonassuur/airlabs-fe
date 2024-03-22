import { Component } from '@angular/core';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { AirportsService } from '../airports.service';
import { Airport } from '../types';
import { RouterModule } from '@angular/router';
import {
  featherLink,
  featherInstagram,
  featherFacebook,
  featherTwitter,
} from '@ng-icons/feather-icons';

@Component({
  selector: 'app-airports-display',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterModule],
  templateUrl: './airports-display.component.html',
  styleUrl: './airports-display.component.scss',
  providers: [
    provideIcons({
      featherTwitter,
      featherLink,
      featherInstagram,
      featherFacebook,
    }),
  ],
})
export class AirportsDisplayComponent {
  airports: Airport[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  constructor(private airportsService: AirportsService) {}

  ngOnInit() {
    this.airportsService.getAirports().subscribe((airports) => {
      this.airports = airports;
    });
  }
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.currentPage * this.itemsPerPage, this.airports.length);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get totalPages() {
    return Math.ceil(this.airports.length / this.itemsPerPage);
  }
}
