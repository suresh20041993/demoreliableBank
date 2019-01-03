import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeadcreateserviceService {

  readonly rootUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  public getuserLoginDetails() {
    const userToken = localStorage.getItem('userDetail');
    return JSON.parse(userToken);
  }


  Create(leadType, leadUserName,userId) {
    var data = {
      "leadType":leadType,
      "leadUserName":leadUserName,
      "userId":userId
    };


var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rootUrl + '/leadCreation', data, { headers: reqHeader });
  
  
  
  }

}
