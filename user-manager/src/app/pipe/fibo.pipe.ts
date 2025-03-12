import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'fibo',
})
export class FiboPipe implements PipeTransform {
  @memo()
  fibonacciCalc(n: number): number {
    console.log('futok');
    if (n < 2) {
      return 1;
    } else {
      return this.fibonacciCalc(n - 2) + this.fibonacciCalc(n - 1);
    }
  }

  transform(iterations: number): number {
    if (!iterations || typeof iterations !== 'number') {
      return 0;
    }

    return this.fibonacciCalc(iterations);
  }
}
