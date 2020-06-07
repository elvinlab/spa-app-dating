import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../models/promotion';



@Component({
  selector: 'app-promotion-new',
  templateUrl: './promotion-new.component.html',
  styleUrls: ['./promotion-new.component.css'],
  providers: [CommerceService, PromotionService]
})
export class PromotionNewComponent implements OnInit {
	public page_title: string;
	public identity;
	public token;
	public promotion: Promotion;
  public status: string;
  
  constructor(
    private _route: ActivatedRoute,
		private _router: Router,
		private _CommerceService: CommerceService,
		private PromotionService: PromotionService
  ) {
    this.page_title = "Crear nueva promocion";
		this.identity = this._CommerceService.getIdentity();
		this.token = this._CommerceService.getToken();
		this.promotion = new Promotion(1, '','',1,1,'','','',1);
   }

   public froala_options: Object = {
		charCounterCount: true,
		language: 'es',
		toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat'],
		toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat'],
	  };

  ngOnInit(): void {
  }

  onSubmit(form){
		this.PromotionService.create(this.token, this.promotion).subscribe(
			response => {
				if(response.status == 'success'){
					this.promotion = response.category;
					this.status = 'success';

					this._router.navigate(['/../gestionar-promociones']);
				}else{
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
