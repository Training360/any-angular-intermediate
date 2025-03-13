import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { BooksComponent } from './page/books/books.component';
import { LoginComponent } from './page/login/login.component';
import { authGuard } from './guard/auth.guard';
import { BookEditorComponent } from './page/book-editor/book-editor.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [authGuard],
  },
  {
    path: 'books/edit/:id',
    component: BookEditorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
