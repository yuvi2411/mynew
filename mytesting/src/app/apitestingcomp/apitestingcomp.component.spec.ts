import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitestingcompComponent } from './apitestingcomp.component';

describe('ApitestingcompComponent', () => {
  let component: ApitestingcompComponent;
  let fixture: ComponentFixture<ApitestingcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApitestingcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApitestingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
