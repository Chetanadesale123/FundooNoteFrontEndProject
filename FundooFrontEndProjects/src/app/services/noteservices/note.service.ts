import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpservice: HttpService) { this.token = localStorage.getItem(`token`); }
  //create note
  createnote(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token,

      }),
    };
    return this.httpservice.postservices(`Note/Add`, reqdata, true, header);
  }

  //GetAllnote
  getallnotes() {

    //console.log(" getnote service");
    let head = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpservice.getService(`Note/AllNotes`, true, head);
  }
}


