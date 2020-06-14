import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { ClientService } from '../../services/client.service';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment';
import { Commerce } from '../../models/commerce';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { CommerceServiceService } from '../../services/commerce-service.service';
import { Service } from '../../models/service';

@Component({
	selector: 'app-appointment-new',
	templateUrl: './appointment-new.component.html',
	styleUrls: ['./appointment-new.component.css'],
	providers: [ClientService, AppointmentService, CommerceService, CommerceServiceService]
})
export class AppointmentNewComponent implements OnInit {
	AppointmentEditComponent
	public page_title: string;
	public identity;
	public token;
	public appointment: Appointment;
	public commerce: Commerce;
	public service: Service;
	public services: any;
	public status: string;
	public minDate;
	public url;
	dateSelected;
	filterService = '';

	date: { year: number, month: number };

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _clientService: ClientService,
		private _commerceServiceService: CommerceServiceService,
		private _appointmentService: AppointmentService,
		private _commerceService: CommerceService,
		private calendar: NgbCalendar,

	) {

		this.page_title = "Agendar cita";
		this.identity = this._clientService.getIdentity();
		this.token = this._clientService.getToken();
		this.appointment = new Appointment(1, '', '', 0, '', '', '');
		this.commerce = new Commerce('', '', '', '', '', '', '', '', '', '', '', '');
		this.minDate = this.calendar.getToday();

	}

	onPageChange(event) {
		this.config.currentPage = event;
	}

	config = {
		itemsPerPage: 5,
		currentPage: 1,
	};

	public maxSize: number = 100;
	public directionLinks: boolean = true;
	public autoHide: boolean = false;
	public responsive: boolean = true;
	public labels: any = {
		previousLabel: '<--Atras',
		nextLabel: 'Adelante-->',
		screenReaderPaginationLabel: 'Pagination',
		screenReaderPageLabel: 'page',
		screenReaderCurrentLabel: `You're on page`
	};

	public froala_options: Object = {
		charCounterCount: false,
		language: 'es',
		toolbarButtons: ['.', '.', '.', '.'],
		toolbarButtonsXS: ['.', '.', '.', '.'],
		toolbarButtonsSM: ['.', '.', '.', '.'],
		toolbarButtonsMD: ['.', '.', '.', '.'],
	}

	ngOnInit(): void {
		this.getCommerce();
		this.getServicesCommerce();
	}

	getServicesCommerce() {
		this._route.params.subscribe(params => {

			this._commerceServiceService.getServicesCommerce(params['id']).subscribe(
				response => {
					if (response.status == 'success') {

						this.services = response.servicesCommerce;
					}
				},
				error => {
					console.log(error);
				}
			);
		});
	}

	getCommerce() {
		this._route.params.subscribe(params => {

			this._commerceService.getCommerce(params['id']).subscribe(
				response => {
					if (response.status == 'success') {

						let commerce = response.commerce;

						this.commerce = new Commerce(
							this.appointment.commerce_id = commerce[0].id,
							'',
							'',
							commerce[0].name_owner,
							commerce[0].name_commerce,
							'',
							commerce[0].cell,
							commerce[0].tell,
							'',
							commerce[0].description,
							commerce[0].address,
							commerce[0].image,

						);

					}
				},
				error => {
					console.log(error);
				}
			);
		});
	}

	onSubmit(form) {
		this.appointment.schedule_day = this.dateSelected.year + "-" + this.dateSelected.month + "-" + this.dateSelected.day;
		this._appointmentService.create(this.token, this.appointment).subscribe(
			response => {
				if (response.status == 'success') {
					this.appointment = response.appointment;
					this.status = 'success';

					this._router.navigate(['/../historial-citas/citas-pendientes']);
				} else {
					this.status = 'error';
				}
			},
			error => {
				this.status = 'error';
				console.log(<any>error);
			}
		);
	}

	getServiceId(id) {
		this.appointment.service_id = id;
	}
}
