import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationReschedulingComponent } from './cancellation-rescheduling.component';

describe('CancellationReschedulingComponent', () => {
  let component: CancellationReschedulingComponent;
  let fixture: ComponentFixture<CancellationReschedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancellationReschedulingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellationReschedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
