import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private cache: any[] | null = null;

  constructor(private http: HttpClient) {}

  getDataPaged(page: number, limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?_page=${page}&_limit=${limit}`);
  }

  getDataVirtualScroll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
