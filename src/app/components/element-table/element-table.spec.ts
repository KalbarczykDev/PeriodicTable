import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTable } from './element-table';

describe('ElementTable', () => {
  let component: ElementTable;
  let fixture: ComponentFixture<ElementTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
