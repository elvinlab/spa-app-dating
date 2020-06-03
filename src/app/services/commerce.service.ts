import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable()
export class CommerceService {
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

	register(commerce): Observable<any>{
		let json = JSON.stringify(commerce);
		let params = 'json='+json;

		//Definir carreteras
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post(this.url+'commerce/register', params, {headers: headers});
	}

}