export class TestStep {
  id: number = 0;
  code: string = '';
  testCaseId: number = 0;
  description: string = '';
  status: 'passed' | 'blocked' | 'failed' = 'passed';
}
