import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-edit',
  templateUrl: '../post-new/post-new.component.html',
})
export class PostEditComponent implements OnInit {

	public page_title: string;
	public identity;
	public token;
	public post: Post;
	public categories;
	public status;
	public is_edit: boolean;
	public url: string;

	
	constructor(
		
	){
	
	}

	ngOnInit(){

	}
}
