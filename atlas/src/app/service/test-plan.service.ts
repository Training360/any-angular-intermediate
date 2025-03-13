import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { TestPlan } from '../model/test-plan';

@Injectable({
  providedIn: 'root',
})
export class TestPlanService extends BaseService<TestPlan> {
  protected override entity: string = 'testPlan';

  constructor() {
    super();
  }
}
