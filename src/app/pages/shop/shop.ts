import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  products = [
    {
      name: 'Rwanda Bourbon - 1kg',
      description: 'Our signature single-origin Rwanda Bourbon, freshly roasted to perfection. Rich, full-bodied with notes of dark chocolate and berries.',
      weight: '1kg',
      image: 'images/2.PNG',
      badge: 'Best Seller'
    },
    {
      name: 'Rwanda Bourbon - half kg',
      description: 'The same premium Rwanda Bourbon in a smaller bag. Perfect for home brewing and coffee enthusiasts.',
      weight: 'half kg',
      image: 'images/2.PNG',
      badge: 'Popular'
    },
    {
      name: 'Arabica Blend - 1kg',
      description: 'A carefully crafted blend of Rwanda\'s finest Arabica beans. Smooth, balanced with a sweet caramel finish.',
      weight: '1kg',
      image: 'images/2.PNG',
      badge: 'New'
    },
    {
      name: 'Arabica Blend - half kg',
      description: 'Our premium Arabica blend in a half kg bag. Great for gifting or trying something new.',
      weight: 'half kg',
      image: 'images/2.PNG',
      badge: 'Gift Idea'
    }
  ];

  orderOnWhatsApp(productName: string) {
    const message = `Hello DEL COFFEE! I'd like to order: ${productName}`;
    const url = `https://wa.me/250788770567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}