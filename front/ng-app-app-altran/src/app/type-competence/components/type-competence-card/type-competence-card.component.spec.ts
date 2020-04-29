import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCompetenceCardComponent } from './type-competence-card.component';

describe('TypeCompetenceCardComponent', () => {
  let component: TypeCompetenceCardComponent;
  let fixture: ComponentFixture<TypeCompetenceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCompetenceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCompetenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
