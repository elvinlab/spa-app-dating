import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { CommerceServiceService } from '../../services/commerce-service.service';
import { CategoryService } from '../../services/category.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-edit',
  templateUrl: '../service-new/service-new.component.html',
  styleUrls: ['./service-edit.component.css'],
  providers: [CommerceService, CategoryService, CommerceServiceService]
})
export class ServiceEditComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public categories: any;
  public service: Service;
  public status: string;
  public isShow: boolean = true;
  filterCategory = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _commerceService: CommerceService,
    private _categoryService: CategoryService,
    private _commerceServiceService: CommerceServiceService,


  ) {

    this.page_title = "Editar servicio";
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
    this.getService();
    this.getCategories();
	}

	getService() {
    // Sacar el id de la url
    
		this._route.params.subscribe(params => {
			let id = +params['id'];
			// Peticion ajax para sacar los datos 
			this._commerceServiceService.getService(id).subscribe(
				response => {
					if (response.status == 'success') {
						let service = response.service;
						// Evitar que un usuario se pase de listo
						if (service[0].commerce_id != this.identity.id) {
							this._router.navigate(['/../gestionar-servicios']);
						} else {
							this.service = new Service(
								service[0].id,
                service[0].commerce_id,
                service[0].category_id,
								service[0].name,
								service[0].description,
                service[0].price,
              );
						}

					}
				},
				error => {
					console.log(error);
					this._router.navigate(['/../gestionar-servicios']);
				}
			);

		});
	}

	onSubmit(form) {
		this._commerceServiceService.update(this.token, this.service).subscribe(
			response => {
				if (response.status == 'success') {
					this.service = response.Service;
					this.status = 'success';

					this._router.navigate(['/../gestionar-servicios']);
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
    this._categoryService.getCategories().subscribe(
      response => {
        if (response.status == 'success') {
          this.service.category_id = response.categories.id;
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