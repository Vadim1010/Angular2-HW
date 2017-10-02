import { Routes } from '@angular/router';
import { HomeComponent } from './home';
// import { NoContentComponent } from './features/no-content';


export const ROUTES: Routes = [
  { path: 'home',      component: HomeComponent },
  // { path: 'home',  component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: HomeComponent },
];
