import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintrestRegisterationPageComponent } from './pintrest-registeration-page.component';

describe('PintrestRegisterationPageComponent', () => {
  let component: PintrestRegisterationPageComponent;
  let fixture: ComponentFixture<PintrestRegisterationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintrestRegisterationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintrestRegisterationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
