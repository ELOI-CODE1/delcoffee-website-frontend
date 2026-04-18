import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class Location {
  openMaps() {
  window.open('https://maps.app.goo.gl/uHzxJ95geyABNy2z8', '_blank');
}

  openWhatsApp() {
    const message = `Hello DEL COFFEE! I'd like to know your exact location.`;
    const url = `https://wa.me/250793856560?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}