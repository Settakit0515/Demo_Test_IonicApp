import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParkingAddPage } from '../parking-add/parking-add';
import { ParkingDetailPage } from '../parking-detail/parking-detail';

/**
 * Generated class for the ParkingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parking-list',
  templateUrl: 'parking-list.html',
})

export class ParkingListPage {

  //Function//
addParking(){
  this.navCtrl.push(ParkingAddPage);
}

viewParkingDetail(parking: IParking){
  this.navCtrl.push(ParkingDetailPage,{'parking': parking});
}

  //variable//
  parkings: Array<IParking> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //push data to array//
    this.parkings.push({
      id: 1,
      name: 'ที่จอดรถวิภาวดี',
      distance: 10.5,
      available: 4,
      //photo: '../../assets/imgs/01.jpg'
    });

    this.parkings.push({
      id: 2,
      name: 'บิ๊กซีสะพานควาย',
      //distance: 12.2,
      //available: 50,
      photo: '../../assets/imgs/02.jpg'
    });

    this.parkings.push({
      id: 3,
      name: 'ที่จอดรถคอนโดดินแกง',
      distance: 15,
      available: 6,
      photo: '../../assets/imgs/03.jpg'
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkingListPage');
  }

}

export interface IParking{
  //parking detail//
  id: number;
  name: string;
  description?: string;
  distance?: number;
  available?: number;
  photo?: string;
  //*********************//

  //coordinate//
  lat?: number;
  lng?: number;
  //*********************//

  //share by user//
  shared_by?: string;
  shared_photo?: string;
  sahred_phone?: string;
  shared_date?: string;
  //*********************//
  
}


