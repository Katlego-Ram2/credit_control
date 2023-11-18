import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  saveDataToSpreadsheet(): Observable<any> {
    const url = `${this.apiUrl}/saveDataToSpreadsheet`;

    // Make an HTTP request to trigger the function
    return this.http.post(url, {});
  }
  getUserDetails(accountNumber: string): Observable<any> {
    const url = `${this.apiUrl}/getUserDetails?accountNumber=${accountNumber}`;
    return this.http.get<any>(url);
  }
}
