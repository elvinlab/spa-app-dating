import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from '../models/appointment';
import {global} from './global';


@Injectable()
export class AppointmentService {
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = global.url;
	}

	create(token, appointment): Observable<any> {
		let json = JSON.stringify(appointment);
		let params = "json=" + json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', token);

		return this._http.post(this.url + 'appointment', params, { headers: headers });
	}
	
	update(token, appointment, id):Observable<any>{
		// Limpiar campo content (editor texto enriquecido) htmlEntities > utf8
		appointment.description = global.htmlEntities(appointment.description);

		let json = JSON.stringify(appointment);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.put(this.url + 'appointment/' + id, params, {headers: headers});						   
	}

	delete(token, id){
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.delete(this.url + 'appointment/' + id, {headers: headers});
  }
  
	getAppointment(id): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this._http.get(this.url + 'appointment/' + id, { headers: headers });
	}

	getAppointmentsCommerce(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this._http.get(this.url + 'appointment/getpromos/' + id, {headers: headers});
	}

	getAppointments(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'appointment/', {headers: headers});
	}

}