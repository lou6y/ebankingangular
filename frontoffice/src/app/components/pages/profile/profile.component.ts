import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../core/_services/storage.service";
import {User} from "../../../core/_models/user";
import {UserService} from "../../../core/_services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    isLoggedIn = false;
    currentUser: User;
    user : User;
  constructor(private storageService: StorageService, public UService: UserService) { }

  ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
          this.isLoggedIn = true;
          this.currentUser = this.storageService.getUser();
      }
      this.GetUser();
      this.user = {
          annualIncome: null,
          birthday: null,
          cluster: null,
          creationDate: null,
          email: null,
          gender: null,
          id: null,
          lastname: null,
          name: null,
          password: null,
          roles: null,
          spendingScore: null,
          token: null,
          tokenCreationDate: null,
          username: null,
          verificationCode: null,
          verified: null,
          saccounts: null

      }

  }

  GetUser()
  {
      this.UService.getUser(this.currentUser.username).subscribe(data => {
          console.log(data);
          this.user = data;
      }, err => {
          console.log(err);
      });
  }
}
