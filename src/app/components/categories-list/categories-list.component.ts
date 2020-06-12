import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  @Input() categories;
  @Input() identity;
  @Input() service;
  @Input() url;
  @Input() filterCategory;
  @Input() isSelect;
  @Input() isShow;
  @Output() delete = new EventEmitter();
  @Output() isSelectCagegory = new EventEmitter();

  public maxSize: number = 100;
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
  public category_id;
  constructor(

  ) { }

  ngOnInit(): void {
  }

  config = {
    itemsPerPage: 5,
    currentPage: 1,
  };


  onPageChange(event) {

    this.config.currentPage = event;
  }


  deleteCategory(id) {
    this.delete.emit(id);
  }

  getCategorId(id) {
    this.isSelectCagegory.emit(id);
  }

}
