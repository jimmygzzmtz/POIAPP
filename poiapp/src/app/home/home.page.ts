import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminPage } from '../admin/admin.page';
import { ModalController } from '@ionic/angular';

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

  constructor(private http: HttpClient, public modalController: ModalController) { 
    this.loadPOIS()
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
