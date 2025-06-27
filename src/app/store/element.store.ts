import { computed } from '@angular/core';
import { PeriodicElement } from '../models/periodic-element.model';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

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
  filter: { query: string };
};

const initialState: PeriodicElementSearchState = {
  elements: [],
  isLoading: false,
  filter: { query: '' },
};

export const ElementStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ elements, filter }) => ({
    filteredElements: computed(() => {
      const term = filter().query.toLowerCase();
      return elements().filter((el) =>
        Object.values(el).some((v) => String(v).toLowerCase().includes(term)),
      );
    }),
  })),
  withMethods((store) => ({
    loadData(): void {
      patchState(store, { isLoading: true });

      setTimeout(() => {
        patchState(store, {
          elements: ELEMENT_DATA,
          isLoading: false,
        });
      }, 1500);
    },
    setFilter(query: string): void {
      patchState(store, { filter: { query } });
    },
    updateElement(updated: PeriodicElement): void {
      const updatedList = store
        .elements()
        .map((el) => (el.position === updated.position ? updated : el));
      patchState(store, { elements: updatedList });
    },
  })),
);
