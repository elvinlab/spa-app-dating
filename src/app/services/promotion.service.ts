import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Promotion} from '../models/promotion';
import {global} from './global';

@Injectable()
export class PromotionService {
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = global.url;
	}

	create(token, promotion): Observable<any> {
		let json = JSON.stringify(promotion);
		let params = "json=" + json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);

		return this._http.post(this.url + 'promotion', params, { headers: headers });
	}
	
	update(token, promotion, id):Observable<any>{
		// Limpiar campo content (editor texto enriquecido) htmlEntities > utf8
		promotion.description = global.htmlEntities(promotion.description);

		let json = JSON.stringify(promotion);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.put(this.url + 'promotion/' + id, params, {headers: headers});						   
	}

	delete(token, id){
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.delete(this.url + 'promotion/' + id, {headers: headers});
	}


	getpromotion(token, id): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);
		return this._http.get(this.url + 'promotion/' + id, { headers: headers });
	}

	getPromotionsCommerce(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'promotion/getpromos/' + id, {headers: headers});
	}

	getValidPromotion(token, expiry):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'promotion/getvalidpromotion/' + expiry, {headers: headers});
	}

	getPromotions(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'promotion/', {headers: headers});
	}

}