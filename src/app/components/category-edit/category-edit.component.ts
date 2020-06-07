import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  providers: [CommerceService, CategoryService]
})
export class CategoryEditComponent implements OnInit {

  public page_title: string;
  public category: Category;
  public identity;
  public token;
  public status;

  constructor(
    private _commerceService: CommerceService,
    private _categoryService: CategoryService
  ) {
    this.page_title = 'Editar categoria';

    this.identity = this._commerceService.getIdentity();
    this.token = this._commerceService.getToken();
   }

  ngOnInit(): void {
    
  }

}
