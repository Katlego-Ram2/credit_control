import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent {
  comment: string = '';

  constructor(public dialogRef: MatDialogRef<CommentDialogComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}

