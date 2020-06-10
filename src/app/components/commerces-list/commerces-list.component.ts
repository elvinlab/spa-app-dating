import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commerces-list',
  templateUrl: './commerces-list.component.html',
  styleUrls: ['./commerces-list.component.css']
})
export class CommercesListComponent implements OnInit {
  @Input() commerces;
  @Input() url;
  @Input() filterCommerce
  
  @Output() delete = new EventEmitter();
  
  constructor() { 
  
  }

  ngOnInit(): void {
  }

  deleteService(id) {
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
