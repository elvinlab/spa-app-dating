import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable()
export class ClientService {
	public url: string;
	public identity;
	public token;

	constructor(
		public _http: HttpClient
	){
		this.url = global.url;
	}

	test(){
		return "Hola mundo desde un servicio!!";
	}

	register(client): Observable<any>{
		let json = JSON.stringify(client);
		let params = 'json='+json;

		//Definir carreteras
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post(this.url+'client/register', params, {headers: headers});
	}

}