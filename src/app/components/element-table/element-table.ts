import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ElementService } from '../../service/element.service';

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
  ],
  templateUrl: './element-table.html',
  styleUrls: ['./element-table.scss'],
})
export class ElementTable implements OnInit {
  private store = inject(ElementService);
  filterValue = '';
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  elements = this.store.filteredElements;

  ngOnInit(): void {
    this.store.loadData();
  }

  onFilterInput(value: string) {
    this.store.setFilter(value);
  }
}
