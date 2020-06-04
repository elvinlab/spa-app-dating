import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { global } from '../../services/global';

@Component({
	selector: 'app-client-edit',
	templateUrl: './client-edit.component.html',
	styleUrls: ['./client-edit.component.css'],
	providers: [ClientService]
})
export class ClientEditComponent implements OnInit {
	
	public page_title: string;
	public client: Client;
	public identity;
	public token;
	public status;
	public url;

	public froala_options: Object = {
		charCounterCount: true,
		language: 'es',
		toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat'],
	};

	public afuConfig = {
		multiple: false,
		formatsAllowed: ".jpg, .png, .gif, .jpeg",
		maxSize: "50",
		uploadAPI: {
			url: global.url + 'client/upload',
			headers: {
				"Authorization": this._clientService.getToken()
			}
		},

		theme: "attachPin",
		hideProgressBar: false,
		hideResetBtn: true,
		hideSelectBtn: false,
		attachPinText: 'Sube tu avatar de cliente',

	};

	constructor(
		private _clientService: ClientService
	) {
		this.page_title = 'Ajustes de cliente';
		this.client = new Client("", "", "", "", "", "ROLE_CLIENT", "", "", "");
		this.identity = this._clientService.getIdentity();
		this.token = this._clientService.getToken();
		this.url = global.url;
		// Rellenar objeto cliente
		this.client = new Client(
			this.identity.id,
			this.identity.name,
			this.identity.surname,
			this.identity.email,
			this.identity.password,
			this.identity.role,
			this.identity.phone,
			this.identity.address,
			this.identity.image
		);
	}

	ngOnInit() {

	}

	onSubmit(form) {
		this._clientService.update(this.token, this.client).subscribe(
			response => {
				if (response && response.status) {
					console.log(response);
					this.status = 'success';

					// Actualizar cliente en sesión
					if (response.changes.name) {
						this.client.name = response.changes.name;
					}

					if (response.changes.surname) {
						this.client.surname = response.changes.surname;
					}

					if (response.changes.email) {
						this.client.email = response.changes.email;
					}
					if (response.changes.password) {
						this.client.password = response.changes.password;
					}

					if (response.changes.role) {
						this.client.role = response.changes.role;
					}

					if (response.changes.phone) {
						this.client.phone = response.changes.phone;
					}

					if (response.changes.address) {
						this.client.address = response.changes.address;
					}

					if (response.changes.image) {
						this.client.image = response.changes.image;
					}

					this.identity = this.client;
					localStorage.setItem('identity', JSON.stringify(this.identity));

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

	avatarUpload(datos) {
		let data = JSON.parse(datos.response);
		this.client.image = data.image;
	}

}
