import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {CreateOffersComponent} from "./pages/offers/create-offers/create-offers.component";
import {MessagesComponent} from "./pages/messages/messages.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'profile', component: ProfileComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'create-offer', component: CreateOffersComponent},
  {path: 'messages', component: MessagesComponent}
];
