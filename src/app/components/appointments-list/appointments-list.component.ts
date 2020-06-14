import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { AppointmentService } from '../../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
  providers: [AppointmentService]
})
export class AppointmentsListComponent implements OnInit {

  @Input() appointments;
  @Input() identity;
  @Input() status;
  @Input() filterAppointment;
  @Input() token;

  @Output() delete = new EventEmitter();

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

  constructor(
    private _appointmentService: AppointmentService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  config = {
    itemsPerPage: 5,
    currentPage: 1,
  };

  onPageChange(event) {

    this.config.currentPage = event;
  }

  deleteAppointment(id) {
    this.delete.emit(id);
  }

  changeStatus(statusForm, id) {
    let appointment = new Appointment(
      id,
      '',
      '',
      0,
      '',
      '',
      statusForm,
    )

    this._appointmentService.changeStatus(this.token, appointment).subscribe(
			response => {
				if (response.status == 'success') {
					this.status = 'mis-reservas';

          this._router.navigate(['/../registros-citas/', 'mis-reservas']);
				} else {
					this.status = 'mis-reservas';
				}
			},
			error => {
				this.status = 'mis-reservas';
				console.log(<any>error);
			}
		);

   
  }
}
