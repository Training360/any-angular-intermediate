import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { NavComponent } from './common/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'user-manager';

  subTitle = signal('User manager app');

  counter = signal(0);

  constructor() {
    effect(() => {
      console.log(this.counter());
    });
  }

  ngOnInit(): void {
    this.subTitle.set('Any user manager');

    // interval(1000).subscribe(() => {
    //   this.counter.update((c) => c + 1);
    // });
  }
}
