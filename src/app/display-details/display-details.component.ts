import { DataService } from '@/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe(
      (result) => {
        this.data = result;
        console.log('Data fetched successfully', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
