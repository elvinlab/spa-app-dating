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
	
	signup(client, gettoken = null): Observable<any>{
		if(gettoken != null){
			client.gettoken = 'true';
		}

		let json = JSON.stringify(client);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post(this.url+'client/login', params, {headers:headers});
	}

	update(token, client): Observable<any>{
	    // Limpiar campo content (editor texto enriquecido) htmlEntities > utf8
		client.description = global.htmlEntities(client.description);

		let json = JSON.stringify(client);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   	return this._http.put(this.url + 'client/update', params, {headers: headers});
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));

		if(identity && identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('token');

		if(token && token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}
}