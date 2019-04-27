import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { 
    this.loadPOIS()
  }

  /*
  getPOIs() {
    
    console.log("hi")

    return [{name: "lol", location: "Monterrey", type: "Park", description: "why"}]
    
    
    this.http.get('https://poiapi.herokuapp.com/pois').subscribe((response) => {
    console.log(response);
    return response;
    });
    
    

    //console.log("hi")
    
  }
  */

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

}
