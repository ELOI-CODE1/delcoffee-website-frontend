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
    { name: 'Touch Africa Apartment Hotel', description: 'A premium apart hotel in Kigali served with DEL COFFEE freshly roasted Rwandan Arabica beans.', category: 'Hospitality', website: 'touchafrica.rw' },
    { name: '2000 Hotel', description: 'A trusted hotel partner in Kigali enjoying the rich flavors of DEL COFFEE premium roasts.', category: 'Hotel', website: '2000hotel.rw' },
    { name: 'Legend Hotel', description: 'One of Kigali\'s distinguished hotels proudly serving DEL COFFEE to their valued guests.', category: 'Hotel', website: 'legendhotel.co.rw' },
    { name: 'Oasis Apart Hotel', description: 'A comfortable apart hotel in Kigali partnered with DEL COFFEE for premium coffee service.', category: 'Hotel', website: 'oasisaparthotel.rw' },
    { name: 'Kigali Paramount Hotel', description: 'A top hotel in Kigali offering guests the finest DEL COFFEE Rwandan Arabica experience.', category: 'Hotel', website: 'kigaliparamount.rw' },
    { name: 'Pele Hotel', description: 'A valued DEL COFFEE partner serving freshly roasted Rwandan coffee to their guests.', category: 'Hotel', website: 'pelehotel.rw' },
    { name: 'Montana Vista Hotel', description: 'A beautiful hotel in Kigali with stunning views, proudly serving DEL COFFEE premium beans.', category: 'Hotel', website: 'montanavista.rw' },
    { name: 'Terressa Coffee Houses', description: 'A coffee house partner sharing our passion for quality Rwandan coffee with their customers.', category: 'Coffee House', website: 'terressacoffee.rw' },
    { name: 'Murugano Village Hotel', description: 'A unique village hotel experience in Kigali complemented by DEL COFFEE premium roasts.', category: 'Hotel', website: 'muruganovillage.rw' },
    { name: 'Amora Apartment Hotel', description: 'A modern apart hotel in Kigali partnered with DEL COFFEE for an exceptional coffee experience.', category: 'Hospitality', website: 'amoraaparthotel.rw' },
    { name: 'Yummyverse Coffee & Treats', description: 'A delightful coffee and treats partner sharing DEL COFFEE\'s passion for premium Rwandan Arabica with their customers.', category: 'Coffee & Treats', website: 'yummyverse.rw' },
  ];

  getInitials(name: string): string {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  becomePartner() {
    const message = `Hello DEL COFFEE! I am interested in becoming a partner.`;
    const url = `https://wa.me/250793856560?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}