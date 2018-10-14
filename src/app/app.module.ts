import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ParkingAddPage } from '../pages/parking-add/parking-add';
import { ParkingDetailPage } from '../pages/parking-detail/parking-detail';
import { ParkingListPage } from '../pages/parking-list/parking-list';
import { MapPage } from '../pages/map/map';
import { GpsPage } from '../pages/gps/gps';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { SettingPage } from '../pages/setting/setting';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ParkingAddPage,
    ParkingDetailPage,
    ParkingListPage,
    MapPage,
    GpsPage,
    QrcodePage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ParkingAddPage,
    ParkingDetailPage,
    ParkingListPage,
    MapPage,
    GpsPage,
    QrcodePage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
