import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSchedulingComponent } from './exam-scheduling.component';

describe('ExamSchedulingComponent', () => {
  let component: ExamSchedulingComponent;
  let fixture: ComponentFixture<ExamSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSchedulingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
