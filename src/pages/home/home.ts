import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  data = { };
  option :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {

  }

  scanner(){
    console.log("Hello");
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is hered
      console.log(barcodeData);
      this.data = barcodeData;
     }, (err) => {
         // An error occurred
         console.log(err);
     });
    //const results = await this.barcodeScanner.scan();
    // console.log(results);
  }    
}
