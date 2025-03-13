import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { TestStep } from '../model/test-step';

@Injectable({
  providedIn: 'root',
})
export class TestStepService extends BaseService<TestStep> {
  protected override entity: string = 'testStep';

  constructor() {
    super();
  }
}
