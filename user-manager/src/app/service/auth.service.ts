import { inject, Injectable, signal } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface UserCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private router = inject(Router);

  private authUrl = 'http://localhost:3000/';

  readonly lastError = signal('');

  readonly token = signal('');

  constructor() {}

  login(credentials: UserCredentials): void {
    const url = this.authUrl + 'login';
    this.http.post<{ accessToken: string }>(url, credentials).subscribe(
      (response) => {
        console.log(response);
        this.token.set(response.accessToken);
        this.lastError.set('');
        this.router.navigate(['/']);
      },
      (error) => {
        this.lastError.set(error.message);
      }
    );
  }

  register(user: Partial<User>): void {
    const url = this.authUrl + 'register';
    this.http.post<{ accessToken: string }>(url, user).subscribe((response) => {
      console.log(response);
    });
  }

  logout(): void {}
}
