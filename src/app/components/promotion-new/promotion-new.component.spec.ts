import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionNewComponent } from './promotion-new.component';

describe('PromotionNewComponent', () => {
  let component: PromotionNewComponent;
  let fixture: ComponentFixture<PromotionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
