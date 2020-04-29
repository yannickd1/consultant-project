import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCompetenceFormComponent } from './type-competence-form.component';

describe('TypeCompetenceFormComponent', () => {
  let component: TypeCompetenceFormComponent;
  let fixture: ComponentFixture<TypeCompetenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCompetenceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCompetenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
