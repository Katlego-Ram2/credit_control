import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formData: any = {}; // Define an object to hold form data

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  submitForm() {
    // You can access form data using this.formData
    // Implement your logic to send the data to the server or perform other actions
    console.log('Form Data:', this.formData);

    // Send the data to the server using an HTTP POST request
    const apiUrl = 'http://localhost:3000/submitForm'; // Update the URL accordingly
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, this.formData, { headers })
      .subscribe(response => {
        console.log('Server response:', response);
        // Handle the response as needed
      });
  }
}
