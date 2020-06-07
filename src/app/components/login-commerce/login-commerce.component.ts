import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Commerce } from '../../models/commerce';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-login-commerce',
  templateUrl: './login-commerce.component.html',
  styleUrls: ['./login-commerce.component.css'],
  providers: [CommerceService]
})
export class LoginCommerceComponent implements OnInit {
  public page_title: string;
	public commerce: Commerce;
	public status: string;
	public token;
	public identity;

	constructor(
		private _commerceService: CommerceService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
    this.page_title = "Identificate como Comercio"
    this.commerce = new Commerce("", "", "", "",  "", "ROLE_COMMERCE", "", "", "", "", "", "");
	}

	ngOnInit() {
		// Se ejecuta siempre y cierra sesión solo cuando le llega el parametro sure por la url
		this.logout();
	}

	onSubmit(form){
		this._commerceService.signup(this.commerce).subscribe(
			response => {
				// TOKEN
				if(response.status != 'error'){
					this.status = 'success';
					this.token = response;

					// OBJETO USUARIO IDENTIFICADO
					this._commerceService.signup(this.commerce, true).subscribe(
						response => {
							this.identity = response;

							// PERSISTIR DATOS USUARIO IDENTIFICADO
							console.log(this.token);
							console.log(this.identity);

							localStorage.setItem('token', this.token);
							localStorage.setItem('identity', JSON.stringify(this.identity));

							// Redirección a inicio
							this._router.navigate(['inicio']);
						},
						error => {
							this.status = 'error';
							console.log(<any>error);
						}
					);

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

	logout(){
		this._route.params.subscribe(params => {
			let logout = +params['sure'];

			if(logout == 1){
				localStorage.removeItem('identity');
				localStorage.removeItem('token');

				this.identity = null;
				this.token = null;

				// Redirección a inicio
				this._router.navigate(['inicio']);
			}
		});
	}
}
