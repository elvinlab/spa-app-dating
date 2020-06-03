import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCommerceComponent } from './login-commerce.component';

describe('LoginCommerceComponent', () => {
  let component: LoginCommerceComponent;
  let fixture: ComponentFixture<LoginCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
