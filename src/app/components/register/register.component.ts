import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;

  constructor() {
    this.user= new User(1,"","","user_role","","","","");
  }

  ngOnInit(): void {
  }
  onSubmit(form){
    console.log(this.user);
  }

}
