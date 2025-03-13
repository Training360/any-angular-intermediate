import { JsonPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Component, effect, inject, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from '../../model/book.model';
import { BooksStore } from '../../store/books.store';
import { BookService } from '../../service/book.service';
import { RatingInputComponent } from '../../common/rating-input/rating-input.component';

@Component({
  selector: 'app-book-editor',
  imports: [
    ReactiveFormsModule,
    TitleCasePipe,
    KeyValuePipe,
    RatingInputComponent,
  ],
  templateUrl: './book-editor.component.html',
  styleUrl: './book-editor.component.css',
})
export class BookEditorComponent implements OnInit {
  private bookStore = inject(BooksStore);

  private bookService = inject(BookService);

  private router = inject(Router);

  @Input() id: number = 0;

  book = this.bookStore.book;

  form = new FormGroup<any>({});

  bookMembers = Object.keys(new BookModel()).map((key) => {
    const model = new BookModel();
    return { key, type: typeof model[key] };
  });

  keys: string[] = this.bookMembers.map((m) => m.key).filter((k) => k !== 'id');

  constructor() {
    effect(() => {
      if (this.book()) {
        this.createForm();
      }
    });
  }

  ngOnInit(): void {
    this.bookStore.loadOne(this.id);
  }

  createForm() {
    const controls: { [k: string]: FormControl } = {};
    for (let m of this.bookMembers) {
      controls[m.key] = new FormControl(
        this.book()![m.key] ?? 0,
        Validators.required
      );
      if (m.type === 'number') {
        controls[m.key].addValidators([Validators.pattern(/^[0-9]*$/)]);
      }
    }
    this.form = new FormGroup(controls);
    this.form.controls['isbn'].addAsyncValidators(this.getIsbnValidator());
    this.form.controls['isbn'].addValidators(
      Validators.pattern(/^[0-9]{9}-[0-9]$/)
    );
    this.form.controls['pages'].addValidators(Validators.min(1));
  }

  async onUpdate() {
    await this.bookStore.update(this.book()!.id, this.form.value);
    this.router.navigate(['/books']);
  }

  getIsbnValidator(): AsyncValidatorFn {
    return async (control: AbstractControl) => {
      if (control.value) {
        const books = await this.bookService.query(
          `isbn=${control.value}&id_ne=${this.book()!.id}`
        );
        // const otherBook = books.find((b) => b.id != this.book()!.id);
        if (books.length > 0) {
          return { notUniqueISBN: 'This ISBN is already taken!' };
        }
      }
      return null;
    };
  }
}
