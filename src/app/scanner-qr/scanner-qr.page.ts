import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home-page',
  templateUrl: './scanner-qr.page.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class ScannerQrPage {}