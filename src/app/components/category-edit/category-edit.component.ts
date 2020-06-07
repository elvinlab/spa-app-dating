import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';


@Component({
	selector: 'app-category-edit',
	templateUrl: './category-edit.component.html',
	providers: [CommerceService, CategoryService],
	styleUrls: ['./category-edit.component.css'],

})
export class CategoryEditComponent implements OnInit {
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
	) {
		this.page_title = "Editar categoria";
		this.identity = this._CommerceService.getIdentity();
		this.token = this._CommerceService.getToken();
		this.category = new Category(1, '', '', '');
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
		this.getCategory();
	}

	getCategory() {
		// Sacar el id la categoria de la url
		this._route.params.subscribe(params => {
			let id = +params['id'];

			// Peticion ajax para sacar los datos de la categoria
			this._categoryService.getCategory(this.token, id).subscribe(
				response => {
					if (response.status == 'success') {
						let category = response.category;

						// Evitar que un usuario se pase de listo
						if (category[0].commerce_id != this.identity.id) {
							this._router.navigate(['/../gestionar-categorias']);
						} else {
							this.category = new Category(
								category[0].id,
								category[0].commerce_id,
								category[0].name,
								category[0].description,

							);
						}

					}
				},
				error => {
					console.log(error);
					this._router.navigate(['/../gestionar-categorias']);
				}
			);

		});
	}

	onSubmit(form) {
		this._categoryService.update(this.token, this.category, this.category.id).subscribe(
			response => {
				if (response.status == 'success') {
					this.category = response.category;
					this.status = 'success';

					this._router.navigate(['/../gestionar-categorias']);
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
}
