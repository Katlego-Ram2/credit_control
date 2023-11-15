// /*
//  * Apache License
//  * Version 2.0, January 2004
//  * http://www.apache.org/licenses/
//  *
//  * TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
//  * (Include the full text of the license here.)
//  */

// // Your imports and other code comments go here

// // Your TypeScript code starts here

// /**
//  * Your code comments go here.
//  * More comments...
//  */

// // Your functions, classes, and the rest of your code

// import { Injectable } from '@angular/core';
// import { jsPDF } from 'jspdf';

// import 'jspdf-autotable';

// @Injectable({
//   providedIn: 'root',
// })
// export class PdfService {
//   generatePdf(data: any[]): void {
//     const doc = new jsPDF();
//     const header = [['ID', 'Account Number', 'Name of Account', 'Email Address', 'Cell', 'Tel', 'Last Paid', 'Basic Salary', 'Number of Arr', 'Handover']];
//     const rows = data.map(record => [record.id, record.accountNumber, record.nameOfAccount, record.emailAddress, record.cell, record.tel, record.lastPaid, record.basicSalary, record.nrOfArr, record.handover]);

//     doc.autoTable<an({
//       head: header,
//       body: rows,
//     });

//     doc.save('records.pdf');
//   }
// }
