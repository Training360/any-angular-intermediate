import { Component, inject, signal } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private auth = inject(AuthService);

  token = this.auth.token;

  title = signal('User Manager');

  menuItems = signal<MenuItem[]>([
    { text: 'Home', link: '/' },
    { text: 'Users', link: '/users' },
    { text: 'Books', link: '/books' },
  ]);

  onLogout(): void {
    this.auth.logout();
  }
}
