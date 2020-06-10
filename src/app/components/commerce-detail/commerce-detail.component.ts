import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../services/global';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-commerce-detail',
  templateUrl: './commerce-detail.component.html',
  styleUrls: ['./commerce-detail.component.css'],
  providers: [CommerceService, ]
})
export class CommerceDetailComponent implements OnInit {

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
  public commerces: any;
  public url: string;
  filterCommerce = '';
  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _CommerceService: CommerceService,

  ) {

    this.url = global.url;
    this.page_title = 'Explorar comercios';
  }

  ngOnInit() {
      this.getCommerces();
  }

  getCommerces() {

    this._CommerceService.getCommerces().subscribe(
      response => {
        if (response.status == 'success') {
          this.commerces = response.commerces;
        }
      },
      error => {
        console.log(error);
      }
    );

  }
}
