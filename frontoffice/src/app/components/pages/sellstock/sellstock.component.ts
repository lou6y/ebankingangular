import { Component, OnInit } from '@angular/core';
import {InvestmentService} from "../../../core/_services/investment.service";
@Component({
  selector: 'app-sellstock',
  templateUrl: './sellstock.component.html',
  styleUrls: ['./sellstock.component.scss']
})
export class SellstockComponent implements OnInit {
    payload: Map<string,string> = new Map<string, string>();
    public sAccID: any;
    investmentId: any;
    stockSymbol: any;
    quantity: any;
    sellingPrice: any;


  constructor(public IService: InvestmentService) { }

  ngOnInit(): void {
  }


}
