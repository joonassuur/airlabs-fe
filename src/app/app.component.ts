import { Component } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AirportsDisplayComponent } from './airports-display/airports-display.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ScheduleComponent,
    GoogleMapComponent,
    GoogleMapsModule,
    AirportsDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
}
