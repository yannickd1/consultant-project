import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantCompetenceListComponent } from './consultant-competence-list.component';

describe('ConsultantCompetenceListComponent', () => {
  let component: ConsultantCompetenceListComponent;
  let fixture: ComponentFixture<ConsultantCompetenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantCompetenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantCompetenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
