
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CkeditorService {

  result:any;

  constructor(private _http: Http) { }

  getDoc() {
    return this._http.get("/api/doc ")
      .map(result => this.result = result.json().data);
  }
  addDoc(doc){
    return this._http.post("/api/savedoc ", doc)
    .map(result => console.log(result), error => console.log(error));
  }

}