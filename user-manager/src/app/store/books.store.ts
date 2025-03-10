import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { BookModel } from '../model/book.model';
import { computed, inject } from '@angular/core';
import { BookService } from '../service/book.service';

type BooksState = {
  books: BookModel[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ books, filter }) => ({
    booksCount: computed(() => books().length),
  })),
  withMethods((store, bookService = inject(BookService)) => ({
    async loadAll() {
      patchState(store, { isLoading: true });
      const books = await bookService.fetchAll();
      patchState(store, { books, isLoading: false });
    },
  }))
);
