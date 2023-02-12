import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8086/api/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

    getUser(username: any): Observable<any>
    { return this.http.get(API_URL + 'getUser/' + username); }

    editUser(idUser: any, user: any): Observable<any>
    { return this.http.put(API_URL + 'updateUser/' + idUser, user); }

    forgetpassword(email: string): Observable<any>
    { return this.http.post('http://localhost:8086/api/auth/forgot-password', email);}

    resetpassword(token: any, password: any): Observable<any>
    { return this.http.put('http://localhost:8086/api/auth/reset-password', {token, password});}

    getSaccounts(username: any): Observable<any>
    { return this.http.get('http://localhost:8086/api/saccount/getsAccount/' + username); }
}
