import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageReactiveFormComponent } from './login-page-reactive-form.component';

describe('LoginPageReactiveFormComponent', () => {
  let component: LoginPageReactiveFormComponent;
  let fixture: ComponentFixture<LoginPageReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
