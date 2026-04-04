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
  selectedFile: string | null = null;
  selectedType: string | null = null;
  galleryOpen = false;

  gallery = [
    { file: 'images/vid1.MP4', type: 'video', caption: 'Coffee setup at the event' },
    { file: 'images/vid2.MP4', type: 'video', caption: 'Coffee setup at the event' },
    { file: 'images/vid3.MP4', type: 'video', caption: 'Our product being used to serve.' },
    { file: 'images/vid4.MP4', type: 'video', caption: 'Wedding at Mez Park, Kigali' },
  ];

  openGallery() {
    this.galleryOpen = true;
  }

  closeGallery() {
    this.galleryOpen = false;
    this.selectedFile = null;
    this.selectedType = null;
  }

  openFile(file: string, type: string) {
    this.selectedFile = file;
    this.selectedType = type;
  }

  closeFile() {
    this.selectedFile = null;
    this.selectedType = null;
  }

  isVideo(file: string): boolean {
    return file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov');
  }

  bookEvent() {
    const message = `Hello DEL COFFEE! I would like to book you for my event.`;
    const url = `https://wa.me/250793856560?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}