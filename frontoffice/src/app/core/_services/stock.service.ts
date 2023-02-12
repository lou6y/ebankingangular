import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8086/api/stock/';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }
    GetStock(symbl: any): Observable<any> {
        return this.http.get(API_URL + 'stock/' + symbl ); }

}
