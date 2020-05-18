import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../models/category';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
 
})
export class CategoryDetailComponent implements OnInit {
	public page_title: string;
	public category: Category;
	public posts: any;
	public url: string;
	public identity;
	public token;

  constructor(

  ){
  
  }

  ngOnInit() {
  	
  }

}
