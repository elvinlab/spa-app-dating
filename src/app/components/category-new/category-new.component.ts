import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css'],
  providers: [CommerceService, CategoryService]
})
export class CategoryNewComponent implements OnInit {
	public page_title: string;
	public identity;
	public token;
	public category: Category;
	public status: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _CommerceService: CommerceService,
		private _categoryService: CategoryService
	){
		this.page_title = "Crear nueva categoria";
		this.identity = this._CommerceService.getIdentity();
		this.token = this._CommerceService.getToken();
		this.category = new Category(1, '','','');
	}

	public froala_options: Object = {
		charCounterCount: true,
		language: 'es',
		toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat'],
	  };

	ngOnInit() {
	}

	onSubmit(form){
		this._categoryService.create(this.token, this.category).subscribe(
			response => {
				if(response.status == 'success'){
					this.category = response.category;
					this.status = 'success';

					this._router.navigate(['/../gestionar-categorias']);
				}else{
					this.status = 'error';
				}
			},
			error => {
				this.status = 'error';
				console.log(<any>error);
			}
		);
	}

}
