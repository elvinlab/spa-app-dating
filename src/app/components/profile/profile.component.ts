import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  public url;
  public posts: Array<Post>;
  public user: User;
  public identity;
  public token;

  constructor(
  
  ){
  	
  }

  ngOnInit() {
  
  }

  
}
