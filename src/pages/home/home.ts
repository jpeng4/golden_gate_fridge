import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  data = { };
  users: any;
  upc_val;
  option :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public http:Http) {
    this.upc_val = "";
  }

  scanner(){
    console.log("Hello");
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is hered
      console.log(barcodeData);
      this.data = barcodeData;
      this.upc_val = barcodeData.text;
     }, (err) => {
         // An error occurred
         console.log(err);
     });
     // alert(this.upc_val);
  }    

  /*view() {
    if(this.upc_val){
      this.http.get('https://api.upcitemdb.com/prod/trial/lookup?upc=' + this.upc_val)
      .map(res => res.json())
      .subscribe(res => {
        this.users = res.results;
      }, (err) => {
        alert("Failed at loading data");
      })
    } else {
      alert("Please Scan an Item");
    }
  }*/
}
