// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
// dashboard.component.ts
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formData: any = {}; // Define an object to hold form data
  formError: any = {}; // Define an object to hold form validation errors
  FormValid: boolean = false;
  constructor(private http: HttpClient, private toastr: ToastrService, private fb: FormBuilder,private router: Router) {
    this.toastr.toastrConfig.timeOut = 3000;
  }

  ngOnInit() {}

  

  submitForm() {
    if (!this.isFormValid()) {
      this.toastr.error('Invalid form. Please check the fields.', 'Error');
      return;
    }

    console.log('Form Data:', this.formData);

    // Send the data to the server using an HTTP POST request
    const apiUrl = 'http://localhost:3000/submitForm'; // Update the URL accordingly
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, this.formData, { headers })
      .subscribe(response => {
        console.log('Server response:', response);
        // Reset form and error objects after successful submission
        this.formData = {};
        this.formError = {};
        this.toastr.success('Form submitted successfully!', 'Success');
        this.toastr.success('Form submitted successfully!', 'Success');
      }, error => {
        console.error('Error submitting form:', error);
        this.toastr.error('Error submitting form. Please try again later.', 'Error');
      });
      
  }

  // Function to check if the form is valid
  private isFormValid(): boolean {
    let isValid = true;
    this.formError = {}; // Reset form error object

    // Check the validity of each form field
    if (!this.formData.accountNumber || this.formData.accountNumber.trim() === '') {
      this.formError.accountNumber = 'Account Number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(this.formData.accountNumber.trim()) || !this.formData.accountNumber.startsWith('22')) {
      this.formError.accountNumber = 'Account Number must be a 10-digit number starting with 22.';
      isValid = false;
    }

    if (!this.formData.nameOfAccount || this.formData.nameOfAccount.trim() === '' || !isNaN(Number(this.formData.nameOfAccount))) {
      this.formError.nameOfAccount = 'Name of Account must be a valid string.';
      isValid = false;
    }

    if (!this.formData.emailAddress || this.formData.emailAddress.trim() === '' || !/\S+@\S+\.\S+/.test(this.formData.emailAddress.trim())) {
      this.formError.emailAddress = 'Please enter a valid email address.';
      isValid = false;
    }  if (!this.formData.cell || this.formData.cell.trim() === '' || !/^(?:\+27|0)[1-9]\d{8}$/.test(this.formData.cell.trim())) {
      this.formError.cell = 'Cell must be a valid South African phone number.';
      isValid = false;
    }
  
    if (!this.formData.tel || this.formData.tel.trim() === '' || !/^(?:\+27|0)[1-9]\d{8}$/.test(this.formData.tel.trim())) {
      this.formError.tel = 'Tel must be a valid South African phone number.';
      isValid = false;
    }

    if (!this.formData.lastPaid || this.formData.lastPaid.trim() === '') {
      this.formError.lastPaid = 'Last Paid is required.';
      isValid = false;
    }

    if (!this.formData.nrOfArr || this.formData.nrOfArr.trim() === '') {
      this.formError.nrOfArr = 'NR of ARR is required.';
      isValid = false;
    }

    if (!this.formData.handOver || this.formData.handOver.trim() === '') {
      this.formError.handOver = 'Hand Over is required.';
      isValid = false;
    }

    // Repeat the validation for other fields...

    return isValid;
  }
  navigateToPrintComponent() {
    this.router.navigate(['/print']);
  }
}
