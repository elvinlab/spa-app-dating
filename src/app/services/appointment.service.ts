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

	appointmentStatus(token, status, id):Observable<any>{
		
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.put(this.url + 'appointmentstatus/' + id +'/'+status, {headers: headers});						   
	}
	
	delete(token, id){
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

	   return this._http.delete(this.url + 'appointment/' + id, {headers: headers});
  }
  
	getAppointment(token, id): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
										.set('Authorization', token);
		return this._http.get(this.url + 'appointment/' + id, { headers: headers });
	}

	getAppointmentsCommerce(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
		return this._http.get(this.url + 'getappointmentscommerce/' + id, {headers: headers});
	}

	getAppointmentsClient(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'getappointmentsclient/' + id, {headers: headers});
	}

	getAppointmentsClient2(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'getappointmentsclient2/' + id, {headers: headers});
	}

	getAppointmentsClient3(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'getappointmentsclient3/' + id, {headers: headers});
	}	

	getAppointmentsClient4(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		return this._http.get(this.url + 'getappointmentsclient4/' + id, {headers: headers});
	}

}