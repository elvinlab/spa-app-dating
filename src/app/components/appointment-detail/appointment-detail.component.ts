import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Appointment } from '../../models/appointment';
import { AppointmentService } from '../../services/appointment.service';
import { ClientService } from '../../services/client.service';
import { CommerceService } from '../../services/commerce.service';
import { NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css'],
  providers: [AppointmentService, ClientService, CommerceService]
})
export class AppointmentDetailComponent implements OnInit {

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

  public page_title: string;
  public appointment: Appointment;
  public appointments: any;
  public name_commerce;
  public name_service;
  public price_service;
  public url: string;
  public identity;
  public status;
  public token;
  filterAppointment = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _appointmentService: AppointmentService,
    private _clientService: ClientService,
    private _commerceService: CommerceService,
    private calendar: NgbCalendar,

  ) {
    this.page_title = 'Gestionar Citas';
    this.identity = this._clientService.getIdentity();
    this.token = this._clientService.getToken();

  }

  onPageChange(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.getAppointmentsClient();
  }

  getAppointmentsClient() {

    this._route.params.subscribe(params => {
      console.log(params);
      let direction = params['rutes'];

      if (direction == 'mi-historial') {
        this.status = 'mi-historial';
        this.page_title = 'Mi historial de citas';
        this._appointmentService.getAppointmentsClientRecord(this.token, this.identity.id).subscribe(
          response => {
            if (response.status == 'success') {
              this.appointments = response.appointments;

            }
          },
          error => {
            console.log(error);
          }
        );

      } else if (direction == 'citas-confirmadas') {
        this.status = 'citas-confirmadas';
        this.page_title = 'Mis citas confirmadas';
        this._appointmentService.getAppointmentsByClientConfirmed(this.token, this.identity.id).subscribe(
          response => {
            if (response.status == 'success') {
              this.appointments = response.appointments;

            }
          },
          error => {
            console.log(error);
          }
        );


      } else if (direction == 'citas-canceladas') {
        this.status = 'citas-canceladas';
        this.page_title = 'Mis citas canceladas';
        this._appointmentService.getAppointmentsByClientCanceled(this.token, this.identity.id).subscribe(
          response => {
            if (response.status == 'success') {
              this.appointments = response.appointments;

            }
          },
          error => {
            console.log(error);
          }
        );

      } else if (direction == 'citas-pendientes') {
        this.status = 'citas-pendientes';
        this.page_title = 'Mis citas pendientes';
        this._appointmentService.getAppointmentsByClientPending(this.token, this.identity.id).subscribe(
          response => {
            if (response.status == 'success') {
              this.appointments = response.appointments;
              console.log(this.appointments)
            }
          },
          error => {
            console.log(error);
          }
        );
      } else if (direction == 'reservas-pendientes') {
        this.status = 'reservas-pendientes';
        this.page_title = 'Mis reservas pendientes';
        this.identity = this._commerceService.getIdentity();
        this.token = this._commerceService.getToken();
        this._appointmentService.getAppointmentsByCommercePending(this.token, this.identity.id).subscribe(
          response => {
            if (response.status == 'success') {
              this.appointments = response.appointments;
              console.log(this.appointments)

            }
          },
          error => {
            console.log(error);
          }
        );
      } else if (direction == 'mis-reservas') {
        this.status = 'mis-reservas';
        this.page_title = 'Mi historial de reservas';
        this.identity = this._commerceService.getIdentity();
        this.token = this._commerceService.getToken();
        this._appointmentService.getAppointmentsCommerceRecord(this.token, this.identity.id).subscribe(
          response => {
            if (response.status == 'success') {
              this.appointments = response.appointments;

            }
          },
          error => {
            console.log(error);
          }
        );
      }else if (direction == 'mis-reservas-proximas') {
        this.status = 'mis-reservas-proximas';
        this.page_title = 'Mis proximas citas a atender';
        this.identity = this._commerceService.getIdentity();
        this.token = this._commerceService.getToken();

        let minDate = this.calendar.getToday();

        let date = minDate.year + "-" + minDate.month + "-" + minDate.day;
        this._appointmentService.getApointmentsCommerceValid(this.token, date).subscribe(
          response => {
            if (response.status == 'success') {
              this.appointments = response.appointments;

            }
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  deleteAppointment(id) {
    this._appointmentService.delete(this.token, id).subscribe(
      response => {
        this.getAppointmentsClient();
      },
      error => {
        console.log(error);
      }
    );
  }


}