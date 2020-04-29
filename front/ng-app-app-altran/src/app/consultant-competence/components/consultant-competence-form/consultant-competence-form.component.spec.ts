import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantCompetenceFormComponent } from './consultant-competence-form.component';

describe('ConsultantCompetenceFormComponent', () => {
  let component: ConsultantCompetenceFormComponent;
  let fixture: ComponentFixture<ConsultantCompetenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantCompetenceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantCompetenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
