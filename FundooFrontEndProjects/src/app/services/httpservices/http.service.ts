import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  postservices(url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.post(this.baseurl + url, reqdata, token && httpOptions);
  }
  putservices(url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.put(this.baseurl + url, reqdata, token && httpOptions);
  }
  deleteService(url: string, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.delete(this.baseurl + url, token && httpOptions);
  }
  getService(url: string = '', tokenRequired: boolean = false, httpOptions: any = {}) {
    return this.httpClient.get(this.baseurl + url, tokenRequired && httpOptions)
  }
}


