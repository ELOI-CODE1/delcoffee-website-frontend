import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { Events } from './pages/events/events';
import { Location } from './pages/location/location';
import { Partners } from './pages/partners/partners';
import { Contacts } from './pages/contacts/contacts';

export const routes: Routes = [
  { path: '',         component: Home },
  { path: 'shop',     component: Shop },
  { path: 'events',   component: Events },
  { path: 'location', component: Location },
  { path: 'partners', component: Partners },
  { path: 'contacts', component: Contacts },
  { path: '**',       redirectTo: '' }
];