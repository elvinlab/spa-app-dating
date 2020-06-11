import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Appointment } from '../../models/appointment';
import { AppointmentService } from '../../services/appointment.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css'],
  providers: [AppointmentService, ClientService]
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
  public token;
  filterAppointment = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _appointmentService: AppointmentService,
    private _clientService: ClientService

  ) {
    this.page_title = 'Historial de mis citas';
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
    this._appointmentService.getAppointmentsClient(this.token, this.identity.id).subscribe(
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