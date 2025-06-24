import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElement } from '../../models/periodic-element.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.html',
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class EditElement {
  editedElement: PeriodicElement;

  constructor(
    private dialogRef: MatDialogRef<EditElement>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
  ) {
    this.editedElement = { ...data };
  }

  save() {
    this.dialogRef.close(this.editedElement);
  }

  cancel() {
    this.dialogRef.close();
  }
}
