import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObscompComponent } from './obscomp.component';

describe('ObscompComponent', () => {
  let component: ObscompComponent;
  let fixture: ComponentFixture<ObscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
