import { Component } from '@angular/core';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { AirportsDisplayComponent } from '../airports-display/airports-display.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AirportsDisplayComponent, GoogleMapComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
