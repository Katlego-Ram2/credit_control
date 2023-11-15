// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  saveDataToSpreadsheet() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any[]> {
    const url = `${this.apiUrl}/fetchData`;
    return this.http.get<any[]>(url);
  }
}
