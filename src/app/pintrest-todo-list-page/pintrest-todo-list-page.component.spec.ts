import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintrestTodoListPageComponent } from './pintrest-todo-list-page.component';

describe('PintrestTodoListPageComponent', () => {
  let component: PintrestTodoListPageComponent;
  let fixture: ComponentFixture<PintrestTodoListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintrestTodoListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PintrestTodoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
