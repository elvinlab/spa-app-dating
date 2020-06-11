import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { global } from '../../services/global';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService, CommerceService]
})
export class CategoryDetailComponent implements OnInit {

  config = {
    itemsPerPage: 5,
    currentPage: 1,
  };

  public maxSize: number = 100;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--Atras',
    nextLabel: 'Adelante-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  public page_title: string;
  public category: Category;
  public categories: any;
  public url: string;
  public identity;
  public token;
  filterCategory = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoryService,
    private _CommerceService: CommerceService


  ) {
    this.url = global.url;
    this.page_title = 'Listado de categorias';
    this.identity = this._CommerceService.getIdentity();
    this.token = this._CommerceService.getToken();

  }

  onPageChange(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.getCategories();
  }


  getCategories() {
    this._categoryService.getCategories().subscribe(
      response => {
        if (response.status == 'success') {
          this.categories = response.categories;
        }
      },
      error => {
        console.log(error);
      }
    );

  }
  
  deleteCategory(id) {
    this._categoryService.delete(this.token, id).subscribe(
      response => {
        this.getCategories();
      },
      error => {
        console.log(error);
      }
    );
  }
}


