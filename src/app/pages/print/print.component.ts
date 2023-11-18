import { DataService } from '@/data.service';
import { PrintService } from '@/print.service';
import { ElementRef, ViewChild } from '@angular/core';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  @ViewChild('contentToPrint') contentToPrint!: ElementRef;
  constructor(private dataService: DataService) {}
 
  currentDate: string;
    
    ngOnInit(): void {
      this.fetchData();
      const rawDate = new Date();
    this.currentDate = this.formatDate(rawDate, 'dd/MM/yyyy');
}
private formatDate(date: Date, format: string): string {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed
  const year = date.getFullYear();

  const formattedDay = day < 10 ? '0' + day : '' + day;
  const formattedMonth = month < 10 ? '0' + month : '' + month;

  if (format === 'dd/MM/yyyy') {
    return `${formattedDay}/${formattedMonth}/${year}`;
  } else {
    // Add more formats as needed
    return ''; // Handle other formats
  }
}
// printContent(): void {
//   const printWindow = window.open('', '_blank');

//   if (printWindow) {
   
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Credit Control</title>
//           <style>
          
//             body{
//               font-size: 12pt;
//               font-size:small;
//               font-family: 'Times New Roman', serif;

              
//             }
//             table {
//               width: 100%;
//               border-collapse: collapse;

//             }
//             th{
              
//             }
//              </style>
//         </head>
//         <body>

//     `);

//     // Include your HTML content
//     const printContent = this.contentToPrint.nativeElement.innerHTML;
//     printWindow.document.write(`
//       ${printContent}
//     `);

//     // Close the HTML and open the print dialog
//     printWindow.document.write(`
//         </body>
//       </html>
//     `);

//     printWindow.document.close();
//     printWindow.print(); 
//     printWindow.onafterprint = () => {
//       printWindow.close();
//     };
//   } else {
//     console.error('Unable to open print window');
//   }
// }
data: any[] = [];
  filteredData: any[] = [];
  

  

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
  printContent(): void {
    const printWindow = window.open('', '_blank');
  
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Credit Control</title>
            <!-- Include Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

          <style>

            <style>
              body {
                font-size: 12pt;
               font-size:small;
               font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }
              th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
              }

              button {
                display: none;
              }
            </style>
          </head>
          <body>
      `);
  
      // Include your HTML content
      const printContent = this.contentToPrint.nativeElement.innerHTML;
      printWindow.document.write(`
        ${printContent}
      `);
  
      printWindow.document.write(`
      <button>
          </body>
        </html>
      `);
  
      printWindow.document.close();
      printWindow.print(); 
      printWindow.onafterprint = () => {
        printWindow.close();
      };
    } else {
      console.error('Unable to open print window');
    }
  }
  
}



