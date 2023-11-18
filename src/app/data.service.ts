import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any[]> {
    const url = `${this.apiUrl}/fetchData`;
    return this.http.get<any[]>(url).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(error); // Rethrow the error
      })
    );
  }

  getUserDetails(accountNumber: string): Observable<any> {
    const url = `${this.apiUrl}/getUserDetails?accountNumber=${accountNumber}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error fetching user details:', error);
        return throwError(error);
      })
    );
  }

  getAllData(): Observable<any[]> {
    const url = `${this.apiUrl}/fetchData`;
    return this.http.get<any[]>(url).pipe(
      catchError((error) => {
        console.error('Error fetching all data:', error);
        return throwError(error);
      })
    );
  }

  approveCustomer(accountNumber: string): Observable<any> {
    const url = `${this.apiUrl}/approveCustomer`;
    return this.http.post<any>(url, { accountNumber }).pipe(
      catchError((error) => {
        console.error('Error approving customer:', error);
        return throwError(error);
      })
    );
  }

  rejectCustomer(accountNumber: string): Observable<any> {
    const url = `${this.apiUrl}/rejectCustomer`;
    return this.http.post<any>(url, { accountNumber }).pipe(
      catchError((error) => {
        console.error('Error rejecting customer:', error);
        return throwError(error);
      })
    );
  }
}
