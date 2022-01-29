import { Injectable } from '@angular/core';
import { AlertController, AlertButton, LoadingController, AlertInput } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertControllerService {
  
  alertPopUp: HTMLIonAlertElement
  isLoading = false 

  constructor(
    private alertController: AlertController,
    private loadingCtrl: LoadingController
    ) { }

  async presentAlert(header: string, message: string, buttons?: AlertButton[], subTitle?: string) {
    if(!buttons){
      buttons = [{text: 'Ok'}]
    }
    this.alertPopUp = await this.alertController.create({
      header,
      subHeader: subTitle,
      message,
      backdropDismiss: false,
      buttons
    });

    await this.alertPopUp.present();
  }

  async presentAlertConfirm() {
    this.alertPopUp = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await this.alertPopUp.present();
  }

  async presentAlertForm(header: string, message: string, buttons: AlertButton[], inputs: any, subHeader?: string) {
    this.alertPopUp = await this.alertController.create({
      header,
      subHeader,
      message,
      backdropDismiss: false,
      inputs,
      buttons
    })

    return await this.alertPopUp.present()
  }

  removePopUp() {
    this.alertPopUp.dismiss()
  }

  async showLoader(messageReceived?: string) {
    let text: string
    if (messageReceived) {
      text = messageReceived
    }else{
      text = 'Por Favor Espere'
    }
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: text,
      spinner: 'dots',
      backdropDismiss: false,
      keyboardClose: true
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss()
        }
      });
    });
  }

  async removeLoaderPopUp() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss()
  }
}
