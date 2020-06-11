import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  
  @Input() appointments;
  @Input() identity;
  @Input() filterAppointment;

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

  constructor() { }

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

}
