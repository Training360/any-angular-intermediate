import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { BooksComponent } from './page/books/books.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
