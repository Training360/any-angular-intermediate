import { TestStep } from './test-step';

export class TestCase {
  id: number = 0;
  code: string = '';
  testPlanId: number = 0;
  testSteps: TestStep[] = [];
  description: string = '';
  preConditions: number[] = [];
  get status(): 'passed' | 'blocked' | 'failed' {
    if (this.testSteps.find((s) => s.status === 'failed')) {
      return 'failed';
    }

    if (this.testSteps.find((s) => s.status === 'blocked')) {
      return 'blocked';
    }

    return 'passed';
  }
}
