import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../core/_services/storage.service";
import {UserService} from "../../../core/_services/user.service";
import {User} from "../../../core/_models/user";
import {Investment} from "../../../core/_models/investment";
import {Saccount} from "../../../core/_models/saccount";

@Component({
  selector: 'app-saccount',
  templateUrl: './saccount.component.html',
  styleUrls: ['./saccount.component.scss']
})
export class SaccountComponent implements OnInit {
    public currentUser: User;
    public sAcc!: Saccount;
    public listAccounts: any;

  constructor(private storageService: StorageService, public UService: UserService) { }

  ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
          this.currentUser = this.storageService.getUser();
      }
      this.getSaccount();
      this.sAcc =
          {
              creationDate: undefined,
              id: undefined,
              netInvested: undefined,
              netPortfolioValue: undefined,
              realizedGains: undefined,
              realizedGainsPercentage: undefined,
              rib: undefined,
              unrealizedGainsPercentage: undefined

          }
  }
    getSaccount()
    {
        this.UService.getSaccounts(this.currentUser.username).subscribe(data => {
            this.listAccounts = data;
            console.log(data)
        }, err => {
            console.log(err);
        });
    }
}
