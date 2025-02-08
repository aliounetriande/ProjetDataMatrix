import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; 
import { QRCodeComponent } from 'angularx-qrcode';
import { SafeUrl } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { BarcodeGeneratorAllModule,QRCodeGeneratorAllModule,DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'
import { DisplayTextModel } from "@syncfusion/ej2-angular-barcode-generator";



@Component({
  selector: 'app-home-page',
  templateUrl: './creer-qr.page.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, QRCodeComponent, IonLabel, IonItem, IonButton, IonIcon, CommonModule, BarcodeGeneratorAllModule,QRCodeGeneratorAllModule,DataMatrixGeneratorAllModule ],
})

export class CreerQrPage {

produit = {
  gtin: '',
  exp: ''
};
qrCodeData: string = "";
qrCodeDownloadLink: SafeUrl = "";
public displayText?: DisplayTextModel;

  constructor() {

  }

  

  generateQRCode() {
    this.qrCodeData = `Produit:GTIN:${this.produit.gtin};EXP:${this.produit.exp};;`;
    this.displayText = {
      text:'Scannez ici'
    }
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }



  
  
}
