import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../models/promotion';
import { global } from '../../services/global';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.css'],
  providers: [CommerceService, PromotionService]
})
export class PromotionDetailComponent implements OnInit {

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
  public promotion: Promotion;
  public promotions: any;
  public url: string;
  public identity;
  public token;
  filterPromotion = '';
  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _promotionService: PromotionService,
    private _CommerceService: CommerceService

  ) {

    this.url = global.url;
    this.page_title = 'Listado de promociones';
    this.identity = this._CommerceService.getIdentity();
    this.token = this._CommerceService.getToken();

  }

  ngOnInit() {
    if(this.identity && this.identity.role == 'ROLE_COMMERCE'){
      this.getPromotionsCommerce();
    }else if(this.identity && this.identity.role == 'ROLE_CLIENT'){
      this.getPromotions();
     
    }
   
  }


  getPromotionsCommerce() {

    this._promotionService.getPromotionsCommerce(this.token, this.identity.id).subscribe(
      response => {
        if (response.status == 'success') {
          this.promotions = response.promotions;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getPromotions() {
    this._promotionService.getPromotions(this.token).subscribe(
      response => {
        if (response.status == 'success') {
          this.promotions = response.promotions;
          console.log(response.promotions);
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  deletePromotion(id) {
    this._promotionService.delete(this.token, id).subscribe(
      response => {
        this.getPromotionsCommerce();
      },
      error => {
        console.log(error);
      }
    );
  }

}
