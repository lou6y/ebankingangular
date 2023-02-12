import { Component, OnInit } from '@angular/core';
import {InvestmentService} from "../../../core/_services/investment.service";

@Component({
  selector: 'app-buystock',
  templateUrl: './buystock.component.html',
  styleUrls: ['./buystock.component.scss']
})
export class BuystockComponent implements OnInit {
  constructor(public IService: InvestmentService) { }

  ngOnInit(): void {
  }

}
