import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BooksStore } from '../../store/books.store';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiboPipe } from '../../pipe/fibo.pipe';
import { SearchbarComponent } from '../../common/searchbar/searchbar.component';
import { BookModel } from '../../model/book.model';

@Component({
  selector: 'app-books',
  imports: [FormsModule, FiboPipe, SearchbarComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit, OnChanges {
  readonly store = inject(BooksStore);

  phrase = '';

  book = new BookModel();

  ngOnInit(): void {
    this.store.loadAll();
  }

  fibo(n: number): number {
    if (n < 2) {
      return 1;
    } else {
      return this.fibo(n - 2) + this.fibo(n - 1);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  changeAuthor(): void {
    this.book.author = 'Szepesi Mária';
    // const book = new BookModel();
    // book.author = 'Székely József';
    // this.book = book;
  }
}
