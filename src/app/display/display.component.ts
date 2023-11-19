import { DataService } from '@/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '@/comment-dialog/comment-dialog.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  constructor(private dataService: DataService,private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe(
      (result) => {
        this.data = result;
        this.filteredData = [...this.data];
        console.log('Data fetched successfully', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  // Your component code

searchCustomer(accountNumberInput: string): void {
  console.log('Searching for account number:', accountNumberInput);

  this.dataService.getAllData().subscribe((result) => {
    this.data = result;
    console.log('All data:', this.data);

    this.filterData(accountNumberInput.toLowerCase()); // Convert to lowercase for case-insensitive search
    console.log('Filtered data:', this.filteredData);
  });
}

filterData(accountNumber: string): void {
  console.log('Filtering data for account number:', accountNumber);

  this.filteredData = this.data.filter(item =>
    (item.accountNumber || '').toLowerCase().includes(accountNumber.toLowerCase()) ||
    (item.nameOfAccount || '').toLowerCase().includes(accountNumber.toLowerCase()) ||
    (item.emailAddress || '').toLowerCase().includes(accountNumber.toLowerCase()) ||
    (item.cell || '').toLowerCase().includes(accountNumber.toLowerCase()) ||
    (item.tel || '').toLowerCase().includes(accountNumber.toLowerCase()) ||
    (item.lastPaid || '').toLowerCase().includes(accountNumber.toLowerCase()) ||
    (item.nrOfArr || '').toLowerCase().includes(accountNumber.toLowerCase()) ||
    (item.handOver || '').toLowerCase().includes(accountNumber.toLowerCase())
  );
}
acceptCustomer(accountNumber: string): void {
  this.http.post<any>('http://localhost:3000/approveCustomer', { accountNumber }).subscribe(
    (response) => {
      console.log('Customer approved:', response);
      this.fetchData(); // Refresh data after update
     
    },
    (error) => {
      console.error('Error approving customer:', error);
    }
  );
}

rejectCustomer(accountNumber: string): void {
  this.http.post<any>('http://localhost:3000/rejectCustomer', { accountNumber }).subscribe(
    (response) => {
      console.log('Customer rejected:', response);
      this.fetchData(); // Refresh data after update
   
    },
    (error) => {
      console.error('Error rejecting customer:', error);
     
    }
  );
}

  
}
