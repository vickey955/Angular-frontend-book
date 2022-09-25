import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL ="http://localhost:8080/user"
@Injectable({//decorator
  providedIn: 'root'
})
export class UserService {
  save(user:any) {//age/{age}/height/{height}
    return this.http.post(URL+"/age/"+25+'/height/'+100+"?param1=43&pararm2,user);
  }

  constructor(public http:HttpClient) { }

}
