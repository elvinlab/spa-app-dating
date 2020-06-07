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
  public page_title: string;
  public category: Category;
  public categories: any;
  public url: string;
  public identity;
  public token;

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

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
      this.identity.id;
    //mandar el token tambien a la hora de subir imagen
      this._categoryService.getCategories(this.token ,this.identity.id).subscribe(
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
}


