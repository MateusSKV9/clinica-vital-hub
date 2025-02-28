import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationReportComponent } from './examination-report.component';

describe('ExaminationReportComponent', () => {
  let component: ExaminationReportComponent;
  let fixture: ComponentFixture<ExaminationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExaminationReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
