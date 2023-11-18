import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const loginUrl = `${this.apiUrl}/login`;
    const credentials = { username, password };

    return this.http.post<{ success: boolean; token?: string }>(loginUrl, credentials).pipe(
      map((response) => {
        if (response.success && response.token) {
          localStorage.setItem('token', response.token);
          return response.token;
        } else {
          throw new Error('Login failed');
        }
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return of(null);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  // Other methods for user registration, fetching user data, etc.
}

