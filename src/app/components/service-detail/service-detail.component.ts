import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceServiceService } from '../../services/commerce-service.service';
import { Service } from '../../models/service';
import { global } from '../../services/global';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  providers: [CommerceService, CommerceServiceService]
})
export class ServiceDetailComponent implements OnInit {

  config = {
    itemsPerPage: 5,
    currentPage: 1,
  };
  public maxSize: number = 7;
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
  public service: Service;
  public services: any;
  public url: string;
  public identity;
  public token;
  filterService = '';
  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _commerceServiceService: CommerceServiceService,
    private _CommerceService: CommerceService,

  ) {

    this.url = global.url;
    this.page_title = 'Listado de servicios';
    this.identity = this._CommerceService.getIdentity();
    this.token = this._CommerceService.getToken();

  }

  ngOnInit() {
    if (this.identity && this.identity.role == 'ROLE_COMMERCE') {
      this.getServicesCommerce();
    } else {
      this.getServicesClient();
    }

  }

  getServicesCommerce() {

    this._commerceServiceService.getService(this.identity.id).subscribe(
      response => {
        if (response.status == 'success') {
          this.services = response.servicesCommerce;
          console.log(this.services);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getServicesClient() {

    this._commerceServiceService.getServices().subscribe(
      response => {
        if (response.status == 'success') {
          this.services = response.services;
          console.log(this.services);
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteService(id) {
    this._commerceServiceService.delete(this.token, id).subscribe(
      response => {
        this.getServicesCommerce();
      },
      error => {
        console.log(error);
      }
    );
  }

}
