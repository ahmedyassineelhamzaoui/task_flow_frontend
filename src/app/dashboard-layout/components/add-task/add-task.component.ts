import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  constructor(private dialogRef: MatDialogRef<AddTaskComponent>) { }

  closeAddTaskDialog() {
    this.dialogRef.close();
  }


}
