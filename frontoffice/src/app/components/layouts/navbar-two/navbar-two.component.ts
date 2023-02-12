import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../core/_services/storage.service";
import {AuthService} from "../../../core/_services/auth.service";


@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.scss']
})
export class NavbarTwoComponent implements OnInit {

    isLoggedIn = false;
    currentUser;
    constructor(private storageService: StorageService, private authService: AuthService) { }

    ngOnInit(): void {
        if (this.storageService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.currentUser = this.storageService.getUser();
        }
    }

    logout(): void {
        this.authService.logout().subscribe();
        this.storageService.clean();
    }

}
