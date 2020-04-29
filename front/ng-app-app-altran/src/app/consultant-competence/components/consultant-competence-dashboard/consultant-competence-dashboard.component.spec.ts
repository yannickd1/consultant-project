import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantCompetenceDashboardComponent } from './consultant-competence-dashboard.component';

describe('ConsultantCompetenceDashboardComponent', () => {
  let component: ConsultantCompetenceDashboardComponent;
  let fixture: ComponentFixture<ConsultantCompetenceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantCompetenceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantCompetenceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
