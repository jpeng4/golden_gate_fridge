import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { MyGroceriesPage } from '../pages/my-groceries/my-groceries'
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register'
import { AddItemPage} from '../pages/add-item/add-item'
=======
import { ListPage } from '../pages/list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
>>>>>>> 211617cd285ea562bf4eca512dcc2d9cb47c028c

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestServiceProvider } from '../providers/rest-service/rest-service';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const firebaseConfig = {
    apiKey: "AIzaSyAXWuAQCUsfqeRZ8AfD6flTRGPNRWHjnX8",
    authDomain: "golden-gate-fridge.firebaseapp.com",
    databaseURL: "https://golden-gate-fridge.firebaseio.com",
    projectId: "golden-gate-fridge",
    storageBucket: "golden-gate-fridge.appspot.com",
    messagingSenderId: "1006087552902"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyGroceriesPage,
    LoginPage,
    RegisterPage,
    AddItemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
=======
    IonicModule.forRoot(MyApp)
>>>>>>> 211617cd285ea562bf4eca512dcc2d9cb47c028c
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyGroceriesPage,
    LoginPage,
    RegisterPage,
    AddItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    FirebaseProvider,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
=======
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
>>>>>>> 211617cd285ea562bf4eca512dcc2d9cb47c028c
  ]
})
export class AppModule {}

