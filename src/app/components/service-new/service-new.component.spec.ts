import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNewComponent } from './service-new.component';

describe('ServiceNewComponent', () => {
  let component: ServiceNewComponent;
  let fixture: ComponentFixture<ServiceNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
