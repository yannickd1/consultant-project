import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCompetenceDashboardComponent } from './type-competence-dashboard.component';

describe('TypeCompetenceDashboardComponent', () => {
  let component: TypeCompetenceDashboardComponent;
  let fixture: ComponentFixture<TypeCompetenceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCompetenceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCompetenceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
