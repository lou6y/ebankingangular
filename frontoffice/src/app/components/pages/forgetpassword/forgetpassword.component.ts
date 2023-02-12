import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../core/_services/user.service";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
email: any;
  constructor(public UService: UserService) { }

  ngOnInit(): void {
  }
    forgetpassword()
    {
        this.UService.forgetpassword(this.email).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });

        //this.route.navigate(['/reset-password']);
    }
}
