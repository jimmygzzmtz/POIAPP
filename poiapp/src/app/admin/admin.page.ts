import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  usernameString: any;
  passwordString: any;
  deleteID: any;

  addPOIName: any;
  addPOILocation: any;
  addPOIType: any;
  addPOIDescription: any;
  addPOIImage: any;
  addPOIMaps: any;

  updateID: any;
  updatePOIName: any;
  updatePOILocation: any;
  updatePOIType: any;
  updatePOIDescription: any;
  updatePOIImage: any;
  updatePOIMaps: any;

  httpHeader: any;
  token: any

  titleName: any;


  constructor(private http: HttpClient, public modalController: ModalController, public alertController: AlertController, private storage: Storage) {
      this.storage.get('token').then((val) => {

        this.token = val

        this.httpHeader = new HttpHeaders({
            'Authorization': 'Bearer ' + val
          })
      });

      this.storage.get('name').then((val) => {

        this.titleName = val

      });

      
   }

  ngOnInit() {
  }

  async deletePOI(){

    this.http.delete("https://poiapi.herokuapp.com/pois/" + this.deleteID, { headers: this.httpHeader}).subscribe((response) => {
        this.modalController.dismiss();
      },(err) => {this.FailAlert()});

    
  }

  logout(){
    this.http.post("https://poiapi.herokuapp.com/accounts/logout/", {}, { headers: this.httpHeader}).subscribe((response) => {
        this.storage.clear();
        location.reload()
      },(err) => {this.FailAlert()});
  }

  async createPOI(){

    if(this.addPOIName == undefined || this.addPOILocation == undefined || this.addPOIType == undefined || this.addPOIDescription == undefined || this.addPOIImage == undefined || this.addPOIMaps == undefined){
      this.FailAlert()
    }
    else{
      let createJSON = {"name":this.addPOIName, "location":this.addPOILocation, "type":this.addPOIType, "description":this.addPOIDescription, "image":this.addPOIImage, "maps":this.addPOIMaps}

      this.http.post("https://poiapi.herokuapp.com/pois/", createJSON, { headers: this.httpHeader}).subscribe((response) => {
          this.modalController.dismiss();
        },(err) => {this.FailAlert()});
    }
    
  }

  async changePOI(){

    let changeJSON = {"id":this.updateID, "name":this.updatePOIName, "location":this.updatePOILocation, "type":this.updatePOIType, "description":this.updatePOIDescription, "image":this.updatePOIImage, "maps":this.updatePOIMaps}

    this.http.patch("https://poiapi.herokuapp.com/pois/" + this.updateID, changeJSON, { headers: this.httpHeader}).subscribe((response) => {
        this.modalController.dismiss();
      },(err) => {this.FailAlert()});

  }

  async dismiss(){
    this.modalController.dismiss();
  }

  async FailAlert(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Check your inputs, and make sure you have the authorization required.',
      buttons: [
        {
            text: 'OK'
        }
    ]
    });

    await alert.present();
  }

}
