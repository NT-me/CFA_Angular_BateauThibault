import { Component, OnInit } from '@angular/core';
import {JsonReaderService as JsonReader} from "../json-reader.service"
import { Params, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.page.html',
  styleUrls: ['./display-products.page.scss'],
})
export class DisplayProductsPage implements OnInit {

  public productsList;
  public id;
  public data = [];

  constructor(public reader:JsonReader, private route:  ActivatedRoute, private storage: Storage) {  }

  ngOnInit() {
    this.route.params.subscribe(params => {
         for(let param in params ) {
              if (param === "catId"){
                this.id = params[param];
              }
         }
    });

    this.reader.getData().subscribe(
      (resp) => {
        if (this.id == 3){
          this.productsList = resp.filter(item => item.discount != 0);
        }
        else{
          this.productsList = resp.filter(item => item.category == this.id);
        }

        for (var i=0; i<this.productsList.length; i++){
          var item = this.productsList[i]
          this.getQuantity(item.id)
        }
      });

  }

  public addProduct(idProduct){
    let pItem = this.productsList.filter(element => element.id == idProduct)[0]
    this.storage.get(idProduct).then((val) => {
      if (val == undefined){
        // Cas où il n'existe pas encore
        let dict = {"quantity": 1, "name":pItem.name, "price":pItem.price, "id":pItem.id}
        this.storage.set(idProduct, dict)
        // console.log("IN")

      }
      else{
        // Cas où ça existe
        this.storage.get(idProduct).then((val) => {
          let dict = {"quantity": val.quantity + 1, "name":pItem.name, "price":pItem.price, "id":pItem.id}
          this.storage.set(idProduct, dict)
        });
        // console.log("PAS")
      }
      console.log(val)
    });
  }

  public decProduct(idProduct){
    let pItem = this.productsList.filter(element => element.id == idProduct)[0]
    this.storage.get(idProduct).then((val) => {
      if (val != undefined){
        if (val.quantity > 0){
          this.storage.get(idProduct).then((val) => {
            let dict = {"quantity": val.quantity - 1, "name":pItem.name, "price":pItem.price, "id":pItem.id}
            this.storage.set(idProduct, dict)
            // console.log(val)
          });
        }
      }
    });
  }

  public getQuantity(idProduct){
    this.storage.get(idProduct).then((val) => {
      if (val != undefined ){
        this.data[idProduct] = val.quantity
      }
      else{
        this.data[idProduct] = 0
      }
    });
    return 0
  }

  public updateQuantity(funName, idProduct){
    if (funName === "ADD"){
      this.addProduct(idProduct)

    }
    else if (funName === "DEC"){
      this.decProduct(idProduct)
    }
    this.getQuantity(idProduct)
  }

}
