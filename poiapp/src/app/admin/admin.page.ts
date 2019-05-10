import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

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

  updateID: any;
  updatePOIName: any;
  updatePOILocation: any;
  updatePOIType: any;
  updatePOIDescription: any;
  updatePOIImage: any;


  constructor(private http: HttpClient, public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async deletePOI(){

    this.http.delete("https://poiapi.herokuapp.com/" + this.usernameString + "/" + this.passwordString + "/pois/" + this.deleteID).subscribe((response) => {
        this.modalController.dismiss();
      },(err) => {this.FailAlert()});

    
  }

  async createPOI(){

    let createJSON = {"name":this.addPOIName, "location":this.addPOILocation, "type":this.addPOIType, "description":this.addPOIDescription, "image":this.addPOIImage}

    this.http.post("https://poiapi.herokuapp.com/" + this.usernameString + "/" + this.passwordString + "/pois/", createJSON, {}).subscribe((response) => {
        this.modalController.dismiss();
      },(err) => {this.FailAlert()});
    
  }

  async changePOI(){

    let changeJSON = {"id":this.updateID, "name":this.updatePOIName, "location":this.updatePOILocation, "type":this.updatePOIType, "description":this.updatePOIDescription, "image":this.updatePOIImage}

    this.http.patch("https://poiapi.herokuapp.com/" + this.usernameString + "/" + this.passwordString + "/pois/" + this.updateID, changeJSON).subscribe((response) => {
        this.modalController.dismiss();
      },(err) => {this.FailAlert()});

  }

  async dismiss(){
    this.modalController.dismiss();
  }

  async FailAlert(){
    const alert = await this.alertController.create({
      header: 'Missing or incorrect inputs',
      buttons: [
        {
            text: 'OK'
        }
    ]
    });

    await alert.present();
  }

}
