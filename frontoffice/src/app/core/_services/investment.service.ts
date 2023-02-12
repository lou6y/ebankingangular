import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8086/api/investment/';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient) {}

    getInvestments(saccountid: any): Observable<any> {
        return this.http.get(API_URL + 'investments/' + saccountid ); }

    SellStock(saccountid: any, tempInvestmentId: any, stockSymbol: any, quantity: any, sellingPrice: any): Observable<any> {
        return this.http.post(API_URL + 'sell',{saccountid, tempInvestmentId, stockSymbol, quantity, sellingPrice } ); }

    BuyStock(saccountid: any,tempInvestmentId: any, stockSymbol: any, quantity: any, sellingPrice: any): Observable<any> {
        return this.http.post(API_URL + 'buy', {saccountid, tempInvestmentId, stockSymbol, quantity, sellingPrice}); }

}
