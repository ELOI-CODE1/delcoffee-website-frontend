import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { EventsComponent } from './pages/events/events.component';
import { LocationComponent } from './pages/location/location.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'shop',     component: ShopComponent },
  { path: 'events',   component: EventsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact',  component: ContactComponent },
  { path: '**',       redirectTo: '' }
];