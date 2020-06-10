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

	signup(commerce, gettoken = null): Observable<any>{
		if(gettoken != null){
			commerce.gettoken = 'true';
		}

		//quiza ocupe guardar el token en el localstorage
		
		let json = JSON.stringify(commerce);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post(this.url+'commerce/login', params, {headers:headers});
	}

	update(token, commerce): Observable<any>{
	    // Limpiar campo content (editor texto enriquecido) htmlEntities > utf8
		commerce.description = global.htmlEntities(commerce.description);

		let json = JSON.stringify(commerce);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   	return this._http.put(this.url + 'commerce/update', params, {headers: headers});
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity_commerce'));

		if(identity && identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('token_commerce');

		if(token && token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}

}