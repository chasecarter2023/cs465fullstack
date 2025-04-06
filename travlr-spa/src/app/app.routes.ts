// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { TripFormComponent } from './components/trip-form/trip-form.component';

export const routes: Routes = [
  { path: 'trips', component: TripListComponent },
  { path: 'add', component: TripFormComponent },
  { path: 'edit/:id', component: TripFormComponent },
  { path: '', redirectTo: '/trips', pathMatch: 'full' }
];
