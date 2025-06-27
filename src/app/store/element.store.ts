import { Injectable, signal, computed } from '@angular/core';
import { PeriodicElement } from '../models/periodic-element.model';
import { signalStore, withState } from '@ngrx/signals';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },

  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },

  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },

  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },

  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },

  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },

  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },

  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },

  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },

  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

type PeriodicElementSearchState = {
  elements: PeriodicElement[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: PeriodicElementSearchState = {
  elements: ELEMENT_DATA,
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const PerdiodicElementStore = signalStore(withState(initialState));

@Injectable({ providedIn: 'root' })
export class ElementStore {
  private elements = signal<PeriodicElement[]>([]);
  private filter = signal<string>('');

  readonly filteredElements = computed(() => {
    const term = this.filter().toLowerCase();
    return this.elements().filter((el) =>
      Object.values(el).some((v) => String(v).toLowerCase().includes(term)),
    );
  });

  loadData(): void {
    setTimeout(() => this.elements.set(ELEMENT_DATA), 1500);
  }

  setFilter(value: string): void {
    this.filter.set(value);
  }

  updateElement(updated: PeriodicElement): void {
    const newList = this.elements().map((el) => (el.position === updated.position ? updated : el));
    this.elements.set(newList);
  }
}
