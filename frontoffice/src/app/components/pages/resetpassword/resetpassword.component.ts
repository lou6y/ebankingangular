import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../core/_services/user.service";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

    token: any;
    password: any;
    constructor(public UService: UserService) { }

    ngOnInit(): void {
    }
    resetpassword(token, password)
    {
        this.UService.resetpassword(token, password).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
}
