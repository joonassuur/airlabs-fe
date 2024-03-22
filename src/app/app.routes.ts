import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'airport/:id', component: AirportDetailsComponent },
  // { path: 'map', component: MapComponent },
  // { path: 'translations', component: TranslationsComponent },
  // { path: 'tests', component: TestsComponent },
  // { path: 'accessibility', component: AccessibilityComponent },
];
