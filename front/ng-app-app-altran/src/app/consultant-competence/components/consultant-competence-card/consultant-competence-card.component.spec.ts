import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantCompetenceCardComponent } from './consultant-competence-card.component';

describe('ConsultantCompetenceCardComponent', () => {
  let component: ConsultantCompetenceCardComponent;
  let fixture: ComponentFixture<ConsultantCompetenceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantCompetenceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantCompetenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
