import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { CommerceServiceService } from '../../services/commerce-service.service';
import { CategoryService } from '../../services/category.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-new',
  templateUrl: './service-new.component.html',
  styleUrls: ['./service-new.component.css'],
  providers: [CommerceService, CategoryService, CommerceServiceService]
})
export class ServiceNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public categories: any;
  public service: Service;
  public status: string;
  filterCategory = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _commerceService: CommerceService,
    private _categoryService: CategoryService,
    private _commerceServiceService: CommerceServiceService,


  ) {

    this.page_title = "Crear un nuevo servicio";
    this.identity = this._commerceService.getIdentity();
    this.token = this._commerceService.getToken();
    this.service = new Service(1, '', null, '', '', 1);    
  }

  public froala_options: Object = {
    charCounterCount: true,
    language: 'es',
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat'],
  }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit(form) {

    this._commerceServiceService.create(this.token, this.service).subscribe(
      response => {
        if (response.status == 'success') {
          this.service = response.category;
          this.status = 'success';

          this._router.navigate(['/../listar-prmociones']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  getCategories() { 
    this._categoryService.getCategories(this.token).subscribe(
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

  getCategorId(id){
    this.service.category_id = id;
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
