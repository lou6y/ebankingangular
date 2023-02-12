import { Component, OnInit } from '@angular/core';
import {StockService} from "../../../core/_services/stock.service";
import {Stock} from "../../../core/_models/stock";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
    symbl:any;
    stock!: Stock;
    Actif= false;
  constructor(public StService: StockService) { }

  ngOnInit(): void {
      this.stock = {
          symbol: null,
          name : null,
          price: null,
          previousOpen: null,
          previousClose: null,
          high: null,
          low: null,
          volume: null
      }
  }

GetStock()
{
    this.StService.GetStock(this.symbl).subscribe(data => {
        this.stock = data;
        console.log(data);
    }, err => {
        console.log(err);
    });
    this.Actif = true;
}
}
