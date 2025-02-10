import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]  // Ajout des imports nécessaires
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}
  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/scan-qr']);
  }
}
