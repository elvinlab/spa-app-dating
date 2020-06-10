import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommerceService } from '../../services/commerce.service';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../models/promotion';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { global } from '../../services/global';


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

		this.page_title = "Crear nueva promocion";
		this.identity = this._commerceService.getIdentity();
		this.token = this._commerceService.getToken();
		this.promotion = new Promotion(1, '', '', 0, 0, '', '', '', 0);
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
		replaceTexts: {
			selectFileBtn: 'Select Files',
			resetBtn: 'Reset',
			uploadBtn: 'Upload',
			dragNDropBox: 'Drag N Drop',
			attachPinBtn: 'Sube imagen de promocion',
			afterUploadMsg_success: 'Successfully Uploaded !',
			afterUploadMsg_error: 'Upload Failed !'
		  }

	};

	ngOnInit(): void {
	}

	onSubmit(form) {

		this.promotion.expiry = this.dateSelected.year + "-" + this.dateSelected.month + "-" + this.dateSelected.day;

		console.log(this.promotion.expiry);
		console.log(this.dateSelected);
		this._promotionService.create(this.token, this.promotion).subscribe(
			response => {
				if (response.status == 'success') {
					this.promotion = response.category;
					this.status = 'success';

					this._router.navigate(['/../gestionar-promociones']);
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

	imageUpload(data) {
		let image_data = JSON.parse(data.response);
		this.promotion.image = image_data.image;
	}
}
