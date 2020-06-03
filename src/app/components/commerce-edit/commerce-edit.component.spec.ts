import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceEditComponent } from './commerce-edit.component';

describe('CommerceEditComponent', () => {
  let component: CommerceEditComponent;
  let fixture: ComponentFixture<CommerceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
