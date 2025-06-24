import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElement } from './edit-element';

describe('EditElement', () => {
  let component: EditElement;
  let fixture: ComponentFixture<EditElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
