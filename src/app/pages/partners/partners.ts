import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrl: './partners.css'
})
export class Partners {
  partners = [
    {
      name: 'Rwanda Agriculture Board',
      description: 'Supporting Rwandan farmers and promoting high-quality agricultural products including our premium Arabica beans.',
      emoji: '🌱',
      category: 'Agriculture'
    },
    {
      name: 'Kigali Coffee Farmers',
      description: 'A cooperative of dedicated coffee farmers who supply DEL COFFEE with the finest handpicked Arabica beans.',
      emoji: '🫘',
      category: 'Farming'
    },
    {
      name: 'Rwanda Events Network',
      description: 'Our event catering partner helping us bring premium coffee experiences to events across Kigali and beyond.',
      emoji: '🎪',
      category: 'Events'
    },
    {
      name: 'Kigali Hospitality Group',
      description: 'Partnering with leading hotels and restaurants in Kigali to serve DEL COFFEE\'s premium roasts.',
      emoji: '🏨',
      category: 'Hospitality'
    },
    {
      name: 'Rwanda Barista Academy',
      description: 'Collaborating to provide world-class barista training and certification programs in Rwanda.',
      emoji: '🎓',
      category: 'Training'
    },
    {
      name: 'Kigali Delivery Network',
      description: 'Our trusted delivery partner ensuring your freshly roasted coffee arrives quickly and safely across Kigali.',
      emoji: '🚚',
      category: 'Logistics'
    }
  ];

  becomePartner() {
    const message = `Hello DEL COFFEE! I'm interested in becoming a partner.`;
    const url = `https://wa.me/250788770567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}