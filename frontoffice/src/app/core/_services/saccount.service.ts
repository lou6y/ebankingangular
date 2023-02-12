import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8086/api/saccount/';

@Injectable({
  providedIn: 'root'
})
export class SaccountService {

  constructor(private http: HttpClient) { }

    CreatSAccount(saccount: any): Observable<any> {
        return this.http.get(API_URL + 'addasaccount', saccount ); }

}
