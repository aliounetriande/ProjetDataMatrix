import { Routes } from '@angular/router';
import { ExampleComponent } from './example.component';

export const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    children: [

      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then( m => m.HomePage)
      },
      
      {
        path: 'creer-qr',
        loadComponent: () => import('./creer-qr/creer-qr.page').then( m => m.CreerQrPage)
      },
      {
        path: 'scanner-qr',
        loadComponent: () => import('./scanner-qr/scanner-qr.page').then( m => m.ScannerQrPage)
      },
      {
        path: 'list',
        loadComponent: () => import('./list/list.page').then( m => m.ListPage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, 
  
];
