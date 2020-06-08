import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promotions-list',
  templateUrl: './promotions-list.component.html',
  styleUrls: ['./promotions-list.component.css']
})
export class PromotionsListComponent implements OnInit {
	public linkImage: string = 'http://127.0.0.1:8000/api/promotion/image/';
  @Input() promotions;
	@Input() identity;
  @Input() url;
  @Input() filterPromotion;

  @Output() delete = new EventEmitter();
  
  constructor() { 
  
  }

  ngOnInit(): void {
  }

  deletePromotion(id) {
  this.delete.emit(id);
  }

  public froala_options: Object = {
		charCounterCount: false,
		language: 'es',
		toolbarButtons: ['.', '.', '.', '.'],
		toolbarButtonsXS: ['.', '.', '.', '.'],
		toolbarButtonsSM: ['.', '.', '.', '.'],
		toolbarButtonsMD: ['.', '.', '.', '.'],
    }

}
