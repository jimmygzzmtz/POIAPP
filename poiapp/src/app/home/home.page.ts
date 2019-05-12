import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminPage } from '../admin/admin.page';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MyAccountPage } from '../my-account/my-account.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locString: any;
  typeString: any;
  newPoi: any = [];
  apiURL = 'https://poiapi.herokuapp.com/pois';

  constructor(private http: HttpClient, public modalController: ModalController, private storage: Storage) { 
    this.loadPOIS()
  }

  ionViewWillEnter(){
    this.storage.get('token').then((val) => {
      if (val != "" && val != null){
 
      }
      else{
        this.openMyAccount()
      }
    });
  }

  async openMyAccount(){

    const modal = await this.modalController.create({
      component: MyAccountPage,
      componentProps: { 
      },
      backdropDismiss: false
    });

    modal.onDidDismiss()
      .then(() => {
        //location.reload()
    });
    

    await modal.present(); 

  }

  loadPOIS(){
    this.http.get(this.apiURL).subscribe((response) => {
      this.newPoi = response;
      });
  }

  async saveLocation(){
    if((this.locString == undefined || this.locString == "") && (this.typeString == undefined || this.typeString == "")){
      this.apiURL = 'https://poiapi.herokuapp.com/pois'
    }
    if((this.locString != undefined && this.locString != "") && (this.typeString == undefined ||this.typeString == "")){
      this.apiURL = 'https://poiapi.herokuapp.com/pois/location/' + this.locString
    }
    if((this.locString == undefined || this.locString == "") && (this.typeString != undefined && this.typeString != "")){
      this.apiURL = this.apiURL = 'https://poiapi.herokuapp.com/pois/type/' + this.typeString
    }
    if((this.locString != undefined && this.locString != "") && (this.typeString != undefined && this.typeString != "")){
      this.apiURL = 'https://poiapi.herokuapp.com/pois/location/' + this.locString + '/type/' + this.typeString
    }
    
    this.loadPOIS()
  }

  async openAdmin(){

    const modal = await this.modalController.create({
      component: AdminPage,
      componentProps: { 
      }
    });

    modal.onDidDismiss()
      .then(() => {
        
        this.loadPOIS()
        
    });

    await modal.present(); 

  }

}
