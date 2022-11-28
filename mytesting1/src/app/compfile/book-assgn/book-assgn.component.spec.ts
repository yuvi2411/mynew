import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAssgnComponent } from './book-assgn.component';

describe('BookAssgnComponent', () => {
  let component: BookAssgnComponent;
  let fixture: ComponentFixture<BookAssgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAssgnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAssgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
