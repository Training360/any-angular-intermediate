import { Component, inject, signal } from '@angular/core';
import { AuthService, UserCredentials } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  auth = inject(AuthService);

  lastError = this.auth.lastError;

  credentials = signal<UserCredentials>({
    email: '',
    password: '',
  });

  updateCredentials(email: string, password: string) {
    this.credentials.update((c) => ({ email, password }));
  }

  onLogin(): void {
    this.auth.login(this.credentials());
  }

  onRegister(): void {
    this.auth.register({
      email: 'pista@ver.hu',
      password: 'envagyokajokiralyfi',
      firstName: 'Vér',
      lastName: 'István',
    });
  }
}
