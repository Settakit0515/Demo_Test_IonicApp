import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ParkingListPage } from '../parking-list/parking-list';
import { MapPage } from '../map/map';
import { QrcodePage } from '../qrcode/qrcode';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //************VARIABEL*************//
  //Page//
  parkingPage: any;
  settingPage: any;
  mapPage: any;
  qrcodePage: any;  

  constructor(public navCtrl: NavController) {
    //Fix Root Tab//
    this.parkingPage = ParkingListPage;
    this.settingPage = SettingPage;
    this.mapPage = MapPage;
    this.qrcodePage = QrcodePage;

  }

}
