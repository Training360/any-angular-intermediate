import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  userService = inject(UserService);

  userList = this.userService.list;

  ngOnInit(): void {
    this.userService.loadAll();
  }
}
