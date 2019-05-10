import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  usernameString: any;
  passwordString: any;
  deleteID: any;
  addPOI: any;
  updateID: any;
  updatePOI: any;


  constructor(private http: HttpClient, public modalController: ModalController) { }

  ngOnInit() {
  }

  async deletePOI(){

    this.http.delete("https://poiapi.herokuapp.com/" + this.usernameString + "/" + this.passwordString + "/pois/" + this.deleteID).subscribe((response) => {

      });

    this.modalController.dismiss();
  }

  async createPOI(){

    this.http.post("https://poiapi.herokuapp.com/" + this.usernameString + "/" + this.passwordString + "/pois/", JSON.parse(this.addPOI), {}).subscribe((response) => {

      });

    this.modalController.dismiss();
  }

  async changePOI(){

    this.http.patch("https://poiapi.herokuapp.com/" + this.usernameString + "/" + this.passwordString + "/pois/" + this.updateID, JSON.parse(this.updatePOI)).subscribe((response) => {

      });

    this.modalController.dismiss();
  }

  async dismiss(){
    this.modalController.dismiss();
  }

}
