import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  @Input() services;
	@Input() identity;
  @Input() url;
  @Input() filterService;

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
