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
export class DashboardService {


  readonly rootUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private _http: Http) { }


//lead Display api
    view()
          {
            var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
           // return this.http.post(this.rootUrl + '/leadDisplay', data, { headers: reqHeader });
            return this.http.post(this.rootUrl + '/leadDisplay',{ headers: reqHeader });
        }
   
   
   
        // LeadsList(): Observable<any> {
        //   httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
        //   return this.http.post(this.rootUrl + '/leadDisplay',
        //   data, httpOptions).pipe(map(res => res));
        // }
   
   
   
      }
