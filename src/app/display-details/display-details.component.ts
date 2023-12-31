import { DataService } from '@/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '@/comment-dialog/comment-dialog.component';
@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  constructor(private dataService: DataService,private http: HttpClient,private dialog: MatDialog) {}

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
      this.fetchData(); 
      // Refresh data after update
    },
    (error) => {
      console.error('Error approving customer:', error);
     
    }
  );
}

rejectCustomer(accountNumber: string): void {
  const dialogRef = this.dialog.open(CommentDialogComponent, {
    width: '400px',
  });

  dialogRef.afterClosed().subscribe((comment: string) => {
    if (comment) {
      // User submitted a comment, handle it as needed
      console.log('Comment submitted:', comment);

      // Now you can proceed with the rejection logic
      this.http.post<any>('http://localhost:3000/rejectCustomer', { accountNumber, comment }).subscribe(
        (response) => {
          console.log('Customer rejected:', response);
          this.fetchData(); // Refresh data after update
        },
        (error) => {
          console.error('Error rejecting customer:', error);
        }
      );
    } else {
      // User canceled the dialog
      console.log('Comment dialog canceled');
    }
  });
}

  
}
