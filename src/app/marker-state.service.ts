import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkerStateService {
  private markerClicked = false;

  setMarkerClicked(value: boolean): void {
    this.markerClicked = value;
  }

  getMarkerClicked(): boolean {
    return this.markerClicked;
  }
}
