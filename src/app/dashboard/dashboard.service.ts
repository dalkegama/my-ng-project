import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getUserList(): Observable<Users[]> {
    return this.http.get<Users[]>('../assets/dummy-user-data.json').pipe(
      delay(500),
      tap(data => console.log('Data received')),
    );
  }
}
