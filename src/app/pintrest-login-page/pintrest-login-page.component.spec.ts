import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintrestLoginPageComponent } from './pintrest-login-page.component';

describe('PintrestLoginPageComponent', () => {
  let component: PintrestLoginPageComponent;
  let fixture: ComponentFixture<PintrestLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintrestLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintrestLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
