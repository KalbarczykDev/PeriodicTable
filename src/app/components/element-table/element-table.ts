import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ElementStore as ElementStore } from '../../store/element.store';
import { MatDialog } from '@angular/material/dialog';
import { EditElement } from '../edit-element/edit-element';

@Component({
  selector: 'app-element-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './element-table.html',
  styleUrls: ['./element-table.scss'],
})
export class ElementTable implements OnInit {
  private debounceTimer: any;
  private store = inject(ElementStore);
  filterValue = '';
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'actions'];
  elements = this.store.filteredElements;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.loadData();
  }

  onFilterInput(value: string) {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.store.setFilter(value);
    }, 2000);
  }

  openEditDialog(element: Element) {
    const dialogRef = this.dialog.open(EditElement, {
      width: '400px',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.updateElement(result);
      }
    });
  }
}
