import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css'],
  providers: [ClientService]
})
export class LoginClientComponent implements OnInit {

  public page_title: string;
	public client: Client;
	public status: string;
	public token;
	public identity;

	constructor(
		private _clientService: ClientService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
    this.page_title = "Identificate como cliente"
    this.client = new Client("", "", "", "",  "", "ROLE_CLIENT", "", "", "");
	}

	ngOnInit() {
		// Se ejecuta siempre y cierra sesión solo cuando le llega el parametro sure por la url
		this.logout();
	}

	onSubmit(form){
		this._clientService.signup(this.client).subscribe(
			response => {
				// TOKEN
				if(response.status != 'error'){
					this.status = 'success';
					this.token = response;

					// OBJETO USUARIO IDENTIFICADO
					this._clientService.signup(this.client, true).subscribe(
						response => {
							this.identity = response;

							localStorage.setItem('token_client', this.token);
							localStorage.setItem('identity_client', JSON.stringify(this.identity));

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
				localStorage.removeItem('identity_client');
				localStorage.removeItem('token_client');

				this.identity = null;
				this.token = null;

				// Redirección a inicio
				this._router.navigate(['inicio']);
			}
		});
	}
}
