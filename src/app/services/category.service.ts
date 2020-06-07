import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { global } from './global';

@Injectable()
export class CategoryService {
	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(token, category): Observable<any> {
		let json = JSON.stringify(category);
		let params = "json=" + json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);

		return this._http.post(this.url + 'category', params, { headers: headers });
	}

	update(token, category, id):Observable<any>{
		// Limpiar campo content (editor texto enriquecido) htmlEntities > utf8
		category.description = global.htmlEntities(category.description);

		let json = JSON.stringify(category);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.put(this.url + 'category/' + id, params, {headers: headers});
	}

	delete(token, id) {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);

		return this._http.delete(this.url + 'category/' + id, { headers: headers });
	}


	getCategory(token, id): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);
		return this._http.get(this.url + 'category/' + id, { headers: headers });
	}

	getCategories(token, id): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);
		return this._http.get(this.url + 'category/getcategories/' + id, { headers: headers });
	}

}