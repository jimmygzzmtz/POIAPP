import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  loginUsername: String;
  loginPassword: String;
  signUpUsername: String;
  signUpPassword: String;

  constructor(private http: HttpClient, public modalController: ModalController, public alertController: AlertController, private storage: Storage) { }

  ngOnInit() {
  }

  async signUp(){
    this.http.post('https://poiapi.herokuapp.com/accounts/', {username: this.signUpUsername, password: this.signUpUsername}, {}).subscribe((response : any) => {

      this.http.post('https://poiapi.herokuapp.com/accounts/login', {username: this.signUpUsername, password: this.signUpUsername}, {}).subscribe((response: any) => {

        this.storage.set('name', response.account.username)

        this.storage.set('token', response.token)

        if(this.storage.get('token') != null && this.storage.get('token') != undefined){
          this.modalController.dismiss();
        }
      
      },(err) => {this.FailAlert()});  
      
    },(err) => {this.FailAlert()});  
  }

  async FailAlert(){
    const alert = await this.alertController.create({
      header: 'Wrong username or password',
      buttons: [
        {
            text: 'OK'
        }
    ]
    });

    await alert.present();
  }

  async login(){
    this.http.post('https://poiapi.herokuapp.com/accounts/login', {username: this.loginUsername, password: this.loginPassword}, {}).subscribe((response: any) => {

      this.storage.set('name', response.account.username)

      this.storage.set('token', response.token)

      if(this.storage.get('token') != null && this.storage.get('token') != undefined){
        this.modalController.dismiss();
      }
      
    },(err) => {this.FailAlert()});  
  }

}
