import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCommerceComponent } from './register-commerce.component';

describe('RegisterCommerceComponent', () => {
  let component: RegisterCommerceComponent;
  let fixture: ComponentFixture<RegisterCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
