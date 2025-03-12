import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BookModel } from '../../model/book.model';

@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent implements OnChanges {
  @Input() book: BookModel = new BookModel();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
