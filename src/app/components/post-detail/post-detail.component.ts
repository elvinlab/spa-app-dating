import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  
})
export class PostDetailComponent implements OnInit {
	public post: Post;
  public identity;

  constructor(

  	private _route: ActivatedRoute,


  ){
  }

  ngOnInit() {
  	this.getPost();
  }

  getPost(){
  	// Sacar el id del post de la url
  	this._route.params.subscribe(params => {

  	
  	});
  }

}
