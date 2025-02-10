import { Component, inject } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton } from '@ionic/angular/standalone';
import { ScanServService } from '../sercices/scan-serv.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './scanner-qr.page.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton],
})
export class ScannerQrPage {
  isToast = false;
  taostData: any = {}
  private scanServ = inject(ScanServService)
  constructor() { }

  ngOnInit() {
  }

  async scanBarcode(){
    try{
      const code = await this.scanServ.startScan();
      if(!code){
        this.isToast = true;
        this.taostData = {
          message: 'No code found',
          color: 'danger'
        }
        return
      }
      console.log(code)
    }catch(e){
      console.log(e)
    }

  }

}