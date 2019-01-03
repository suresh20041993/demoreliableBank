import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject, Observable, Subject, from, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { NgForm } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }



// public getuserLoginDetails() {
//   const userToken = localStorage.getItem('userDetail');
//   return JSON.parse(userToken);
// }


public getuserLoginDetails() {
  const userToken = localStorage.getItem('userDetail');
  return JSON.parse(userToken);
}



}