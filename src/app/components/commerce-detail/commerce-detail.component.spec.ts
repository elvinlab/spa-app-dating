import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceDetailComponent } from './commerce-detail.component';

describe('CommerceDetailComponent', () => {
  let component: CommerceDetailComponent;
  let fixture: ComponentFixture<CommerceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
