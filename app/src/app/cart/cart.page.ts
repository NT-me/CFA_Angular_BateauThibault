import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public elementList = [];

  constructor(private storage: Storage, public modalCtrl: ModalController) {

  }

  ngOnInit() {
    let index;
    let elList = [];

    this.storage.forEach( (value, key, index) => {
      elList.push({key, value})
    }).then(() =>
    this.elementList = elList
    // console.log(elList)
  )
  }

  sousTotalFun(){
    let a = 0
    this.elementList.forEach(element => {
      a = a + (element.value.price * element.value.quantity)
    });
    return a
    console.log(a)
  }

  commandePassee(){
    this.storage.clear()
    this.elementList = []
  }

}
