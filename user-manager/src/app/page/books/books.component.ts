import { Component, inject, OnInit } from '@angular/core';
import { BooksStore } from '../../store/books.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [JsonPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  readonly store = inject(BooksStore);

  ngOnInit(): void {
    this.store.loadAll();
  }
}
