import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsassgnComponent } from './formsassgn.component';

describe('FormsassgnComponent', () => {
  let component: FormsassgnComponent;
  let fixture: ComponentFixture<FormsassgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsassgnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsassgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
