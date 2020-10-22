import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  constructor( public http: HttpClient) {
  }

  public getData(){
    return this.http.get<any[]>("../assets/data.json");
  }
}
