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
  events = [
    {
      title: 'Coffee Tasting Morning',
      date: 'April 12, 2026',
      time: '9:00 AM – 12:00 PM',
      location: 'Kigali, Rwanda',
      description: 'Join us for an exclusive coffee tasting session where you will explore the unique flavors of Rwanda\'s finest Arabica beans.',
      emoji: '☕',
      type: 'Tasting'
    },
    {
      title: 'Barista Masterclass',
      date: 'April 26, 2026',
      time: '10:00 AM – 2:00 PM',
      location: 'Kigali, Rwanda',
      description: 'A hands-on barista training session for beginners and enthusiasts. Learn brewing techniques from our expert baristas.',
      emoji: '🎓',
      type: 'Training'
    },
    {
      title: 'Corporate Coffee Catering',
      date: 'May 5, 2026',
      time: 'All Day',
      location: 'Kigali Convention Centre',
      description: 'DEL COFFEE will be providing premium coffee catering at a major corporate event in Kigali. Book us for your next event!',
      emoji: '🏢',
      type: 'Catering'
    },
    {
      title: 'Rwanda Coffee Festival',
      date: 'May 20, 2026',
      time: '8:00 AM – 6:00 PM',
      location: 'Kigali, Rwanda',
      description: 'Celebrate Rwanda\'s rich coffee culture with us at the annual Rwanda Coffee Festival. Tastings, demos, and more!',
      emoji: '🇷🇼',
      type: 'Festival'
    }
  ];

  bookEvent(eventTitle: string) {
    const message = `Hello DEL COFFEE! I'd like to book or attend: ${eventTitle}`;
    const url = `https://wa.me/250788770567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}