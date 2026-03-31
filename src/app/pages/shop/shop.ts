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
      name: 'Roasted coffee bean',
      description: 'Whole Rwandan Arabica beans, freshly roasted to perfection. Grind them yourself for the freshest cup possible. Perfect for those who love full control over their brew.',
      weight: '1kg',
      image: 'images/2.PNG',
      badge: 'Best Seller'
    },
    {
      name: 'Roasted Coffee Beans',
      description: 'Whole Rwandan Arabica beans, freshly roasted to perfection. A small pack perfect for sampling or trying our coffee for the first time.',
      weight: 'half kg',
      image: 'images/4.jpg',
      badge: 'Popular'
    },
    {
      name: 'Ground Coffee',
      description: 'Freshly roasted Rwandan Arabica beans, finely ground and ready to brew. Simply add hot water and enjoy. Perfect for everyday home and office use.',
      weight: '1kg',
      image: 'images/3.PNG',
      badge: 'New'
    },
    {
      name: 'Ground Coffee',
      description: 'Freshly roasted Rwandan Arabica beans, finely ground and ready to brew. A small pack ideal for a quick single serve or gifting.',
      weight: 'half kg',
      image: 'images/ground.jpg',
      badge: 'Gift Idea'
    }
  ];

  orderOnWhatsApp(productName: string) {
    const message = `Hello DEL COFFEE! I'd like to order: ${productName}`;
    const url = `https://wa.me/250793856560?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}