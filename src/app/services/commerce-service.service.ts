import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../models/service';
import {global} from './global';

@Injectable()
export class CommerceServiceService {
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = global.url;
	}

	create(token, service): Observable<any> {
		let json = JSON.stringify(service);
		let params = "json=" + json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);

		return this._http.post(this.url + 'service', params, { headers: headers });
	}
	
	update(token, service, id):Observable<any>{
		// Limpiar campo content (editor texto enriquecido) htmlEntities > utf8
		service.description = global.htmlEntities(service.description);

		let json = JSON.stringify(service);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.put(this.url + 'service/' + id, params, {headers: headers});						   
	}

	delete(token, id){
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.delete(this.url + 'service/' + id, {headers: headers});
	}


	getservice(token, id): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);
		return this._http.get(this.url + 'service/' + id, { headers: headers });
	}

	getServicesCommerce(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'service/getpromos/' + id, {headers: headers});
	}

	getServices(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'service/', {headers: headers});
	}

}