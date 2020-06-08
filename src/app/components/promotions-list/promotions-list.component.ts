import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promotions-list',
  templateUrl: './promotions-list.component.html',
  styleUrls: ['./promotions-list.component.css']
})
export class PromotionsListComponent implements OnInit {

  @Input() promotions;
	@Input() identity;
  @Input() url;
  @Input() filterPromotion;


  @Output() delete = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  deletePromotion(id) {
  this.delete.emit(id);
  }


}
