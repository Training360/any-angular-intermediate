import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export abstract class BaseService<T extends { id: number }> {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:3000/';

  protected entity = '';

  private get url(): string {
    return `${this.apiUrl}${this.entity}`;
  }

  constructor() {}

  fetchAll(): Promise<T[]> {
    return firstValueFrom(this.http.get<T[]>(this.url));
  }

  fetchOne(id: number): Promise<T> {
    return firstValueFrom(this.http.get<T>(`${this.url}/${id}`));
  }

  create(record: T): Promise<T> {
    return firstValueFrom(this.http.post<T>(this.url, record));
  }

  update(record: T): Promise<T> {
    return firstValueFrom(
      this.http.patch<T>(`${this.url}/${record.id}`, record)
    );
  }

  remove(id: number): Promise<T> {
    return firstValueFrom(this.http.delete<T>(`${this.url}/${id}`));
  }
}
