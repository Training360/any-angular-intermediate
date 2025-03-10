import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  apiUrl = 'http://localhost:3000/users';

  readonly list = signal<User[]>([]);

  private lastUpdate = 0;

  private cacheValidityTime = 30 * 1000;

  constructor() {}

  loadAll(): void {
    if (this.list().length > 0 && this.isCacheValid()) return;

    this.http.get<User[]>(this.apiUrl).subscribe((data) => {
      this.list.set(data);
    });

    this.lastUpdate = new Date().getTime();
  }

  isCacheValid() {
    return new Date().getTime() - this.cacheValidityTime < this.lastUpdate;
  }
}
