import { Component, OnInit } from '@angular/core';
import {JsonReaderService as JsonReader} from "../json-reader.service"
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.page.html',
  styleUrls: ['./display-products.page.scss'],
})
export class DisplayProductsPage implements OnInit {

  public productsList;
  public id;

  constructor(public reader:JsonReader, private route:  ActivatedRoute) {  }

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
        console.log(this.productsList)
      });

  }
}
