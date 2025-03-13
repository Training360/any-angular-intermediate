import { TestBed } from '@angular/core/testing';

import { TestStepService } from './test-step.service';

describe('TestStepService', () => {
  let service: TestStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
