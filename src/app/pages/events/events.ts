import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  selectedImage: string | null = null;
  galleryOpen = false;

  gallery = [
    { image: 'images/1.PNG', caption: 'Wedding at Mez Park, Kigali' },
    { image: 'images/2.PNG', caption: 'Coffee setup at the event' },
    { image: 'images/3.PNG', caption: 'Freshly brewed coffee for guests' },
  ];

  openGallery() {
    this.galleryOpen = true;
  }

  closeGallery() {
    this.galleryOpen = false;
    this.selectedImage = null;
  }

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

  bookEvent() {
    const message = `Hello DEL COFFEE! I would like to book you for my event.`;
    const url = `https://wa.me/250788770567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}