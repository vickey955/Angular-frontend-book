import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = {
    name:'vemula',
    age:25
  }
  users:any[] =[];
  constructor(public userServices: UserService) { }

  saveUser(){
    console.log('clicked');
    const promise = this.userServices.save(this.user);
    promise.subscribe((responseBody:any) =>{//success handler
      console.log(responseBody);
      this.users.push(responseBody);
  },
    (error:any) => {
      console.log(error);
      
      }
    );
  }
  ngOnInit(): void {
  }

}
  