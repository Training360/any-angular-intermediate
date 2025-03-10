import { inject, Injectable } from '@angular/core';
import { BookModel } from '../model/book.model';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);

  apiUrl = 'http://localhost:3000/books';

  constructor() {}

  fetchAll(): Promise<BookModel[]> {
    return firstValueFrom(this.http.get<BookModel[]>(this.apiUrl));
  }
}
