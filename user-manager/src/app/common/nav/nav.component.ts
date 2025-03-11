import { Component, signal } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  title = signal('User Manager');

  menuItems = signal<MenuItem[]>([
    { text: 'Home', link: '/' },
    { text: 'Users', link: '/users' },
    { text: 'Books', link: '/books' },
    { text: 'Login', link: '/login' },
  ]);
}
