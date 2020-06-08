import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../models/promotion';
import { NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { global } from '../../services/global';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.css'],
  providers: [CommerceService, PromotionService]
})
export class PromotionEditComponent implements OnInit {
	public page_title: string;
	public identity;
	public token;
	public promotion: Promotion;
	public status: string;
	public minDate;
	public url;
	dateSelected;
	date: { year: number, month: number };
  constructor(
    private _route: ActivatedRoute,
		private _router: Router,
		private _commerceService: CommerceService,
    private _promotionService: PromotionService,
    private calendar: NgbCalendar,
  ) {
    this.page_title = "Editar Promocion";
    this.identity = this._commerceService.getIdentity();
      this.token = this._commerceService.getToken();
      this.promotion = new Promotion(1, '','',1,1,'','','',1);
      this.minDate = this.calendar.getToday();
   }


   public froala_options: Object = {
		charCounterCount: true,
		language: 'es',
		toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat'],
    }

    public afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg, .png, .gif, .jpeg",
      maxSize: "50",
      uploadAPI: {
        url: global.url + 'promotion/upload',
        headers: {
          "Authorization": this._commerceService.getToken()
        }
      },
  
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText: 'Sube tu avatar de cliente',
  
    };

  ngOnInit(): void {
    this.getPromotion();
  }


  getPromotion() {
		this._route.params.subscribe(params => {
			let id = +params['id'];


			this._promotionService.getpromotion(this.token, id).subscribe(
				response => {
					if (response.status == 'success') {
						let promotion = response.promotion;

				
						if (promotion[0].commerce_id != this.identity.id) {
							this._router.navigate(['/../listar-promociones']);
						} else {
							this.promotion = new Promotion(
								promotion[0].id,
                promotion[0].commerce_id,
                promotion[0].coupon,
                promotion[0].max,
                promotion[0].amount,
                promotion[0].expiry,
                promotion[0].description,
								promotion[0].image,
								promotion[0].discount,

							);
						}

					}
				},
				error => {
					console.log(error);
					this._router.navigate(['/../gestionar-categorias']);
				}
			);

		});
	}


  onSubmit(form) {

		this.promotion.expiry = this.dateSelected.year + "-" + this.dateSelected.month + "-" + this.dateSelected.day + " 00:00:00";

		console.log(this.promotion.expiry);
		console.log(this.dateSelected);
		this._promotionService.update(this.token, this.promotion,  this.promotion.id).subscribe(
			response => {
				if (response.status == 'success') {
					this.promotion = response.category;
					this.status = 'success';

					this._router.navigate(['/../listar-promociones']);
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


  imageUpload(data){
		let image_data = JSON.parse(data.response);
		this.promotion.image = image_data.image;
	}

}
