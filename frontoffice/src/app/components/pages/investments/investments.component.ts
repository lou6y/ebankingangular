import { Component, OnInit } from '@angular/core';
import {InvestmentService} from "../../../core/_services/investment.service";
import {Investment} from "../../../core/_models/investment";
import {Saccount} from "../../../core/_models/saccount";
import {StorageService} from "../../../core/_services/storage.service";
import {User} from "../../../core/_models/user";
import {UserService} from "../../../core/_services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Stock} from "../../../core/_models/stock";

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {
    public currentUser: User;
    public investment!: Investment;
    public stock: Stock
    public saccid: any;
    public listInvestments: any;
    public value=1;


  constructor(private route: ActivatedRoute, public UService: UserService, public IService: InvestmentService) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
          this.saccid = params['saccid'];});
      this.getInvestments(this.saccid);
      this.stock = {
          high: undefined,
          low: undefined,
          name: undefined,
          previousClose: undefined,
          previousOpen: undefined,
          price: undefined,
          symbol: undefined,
          volume: undefined

      }
      this.investment = {
          averageBuyPrice: null,
          currentValue: null,
          id: null,
          netInvested: null,
          netProfit: null,
          netProfitPercentage: null,
          quantity: null,
          stock: null
      }
  }

    getInvestments(saccid)
    {
        this.IService.getInvestments(saccid).subscribe({
            next: (data) => {
                this.listInvestments = data;
                console.log(data);
            },
            error: (e) => console.error(e)
        });
    }

    minus()
    {
        this.value-=1;
    }
    plus()
    {
        this.value+=1;
    }


    Sell(stock)
    {
        this.stock = stock;
        console.log(this.stock);
        this.IService.SellStock(this.saccid, this.investment.id,this.stock.symbol, this.value, this.stock.price).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }

    Buy(stock)
    {
        this.stock = stock;
        console.log(this.stock);
        this.IService.BuyStock(this.saccid, this.investment.id,this.stock.symbol, this.value, this.stock.price).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }

}
