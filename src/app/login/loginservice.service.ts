import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject, Observable, Subject, from, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'authentication-token': ''
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  

  constructor(private http: HttpClient, private _http: Http) {

  }


  public getuserToken() {
    const userToken = localStorage.getItem('userToken');
    return JSON.parse(userToken);
  }

  abCapsLogin(data): Observable<any> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('authentication-token', 'b8Tp4b3TmT7M3rndL8JQMWeAs+O4SSQT7pMUEwruHj4fXZJCEMLuKFgxM9RtZPcl');
    return this.http.post('http://139.59.35.249/appiyo/account/login', data, httpOptions).pipe(map(res => res));
  }


  abcapUserLogin(data): Observable<any> {
     const userTokenValue = this.getuserToken();
    httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
    httpOptions.headers =  httpOptions.headers.set('authentication-token', userTokenValue.token);
    // console.log('httpOptions.headers', httpOptions.headers);

    const loginUrl = 'http://139.59.35.249/appiyo/ProcessStore/d/workflows' +
    '/624edb18571b11e79d0a0050569cb68c/execute?projectId=ee9503dc9c4d11e7a78b0e1da0678571';
    return this.http.put(loginUrl, data, httpOptions).pipe(map(res => res));
  }

   logOut(): Observable<any>  {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Accept': 'application/json'
    });
      return this.http.get('http://139.59.35.249/appiyo/account/logout', {headers: headers}).pipe(res => res);

  }






}
