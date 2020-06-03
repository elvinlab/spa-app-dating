import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';
//import { ClientService } from '../../services/Client.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers: [ClientService]
})
export class LoginComponent implements OnInit {
	public page_title: string;
	public Client: Client;
	public status: string;
	public token;
	public identity;

	constructor(
		//private _ClientService: ClientService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		this.page_title = 'Identificate';
		//this.Client = new Client(1, '', '', 'ROLE_Client', '', '', '', '');
	}

	ngOnInit() {
		// Se ejecuta siempre y cierra sesión solo cuando le llega el parametro sure por la url
	
	}

	

}

