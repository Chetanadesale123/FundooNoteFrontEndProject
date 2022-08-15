import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token'); }
  //Register section
  register(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservices(
      `User/Register`,
      reqdata,
      false,
      header
    );
  }
  //login section
  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservices(
      `User/Login`,
      reqdata,
      false,
      header
    );
  }
  //forget password api  section
  forgetPassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.postservices(
      `User/Forget?email=${reqdata.email}`,
      reqdata,
      false,
      header
    );
  }
  //reset password
  resetPassword(reqdata: any, token: any) {
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: this.token,
      }),
    };
    return this.httpService.putservices(
      `User/Reset`,
      reqdata,
      true,
      headerOption
    );
  }
}
