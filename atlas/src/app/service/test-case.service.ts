import { Injectable } from '@angular/core';
import { TestCase } from '../model/test-case';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TestCaseService extends BaseService<TestCase> {
  protected override entity: string = 'testCase';

  constructor() {
    super();
  }
}
