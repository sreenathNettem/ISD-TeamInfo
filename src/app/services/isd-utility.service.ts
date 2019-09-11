import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { reduce } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IsdUtilityService {

  loaderElement;
  constructor(
    private router: Router,
    private loaderController: LoadingController,
    public actionSheetController: ActionSheetController,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
  }

  /** Loader controller util service starts here */

  // /**
  //    * Present Loader with message on screen
  //    * @param loaderMessage - loader message
  //    * @returns [LoadingController] - Controller for handling loader
  //    */
  async showLoader(loaderMessage: string = '') {

    this.loaderElement = await this.loaderController.create({
      message: loaderMessage,
      spinner: 'crescent',
      backdropDismiss: true
    });
    const loader = await this.loaderController.getTop();
    await this.loaderElement.present();
    setTimeout(() => {
      this.hideLoader();
    }, 5000);
  }

  /**
   * Hide loader
   * @param loader - LoadingController
   */
  hideLoader() {
    this.loaderController.dismiss(this.loaderElement);
  }

  async getAllLoaders() {
    const loader = await this.loaderController.getTop();
    return loader;
  }

  /** Loader controller util service ends here */

  priceConversion(value) {
    if (value !== undefined && value !== null) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
      return '';
    }
  }

  /*Action sheet controller util service starts here*/
  async presentActionSheet(data) {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'alertDanger',
      header: data.header,
      buttons: this.createButtons(data),
    });
    await actionSheet.present();
  }

  createButtons(data) {
    const buttons = [];
    data.data.forEach(page => {
      const button = {
        text: page.text,
        cssClass: 'action-sheet-btn-color',
        handler: () => {
          this.router.navigate([page.route]);
        }
      };
      buttons.push(button);
    });
    return buttons;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      // header: data.header,
      // message: data.message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  /* toast messages */
  async toastFunction(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
