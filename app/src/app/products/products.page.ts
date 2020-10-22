import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public categoryList;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any[]>("../../assets/catList.json").subscribe(
      (resp) => {
        this.categoryList = resp;
        console.log(this.categoryList)
      });
  }

}
