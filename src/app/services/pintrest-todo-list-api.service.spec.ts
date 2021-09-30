import { TestBed } from '@angular/core/testing';

import { PintrestTodoListAPIService } from './pintrest-todo-list-api.service';

describe('PintrestTodoListAPIService', () => {
  let service: PintrestTodoListAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PintrestTodoListAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
