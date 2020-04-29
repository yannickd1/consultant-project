import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCompetenceListComponent } from './type-competence-list.component';

describe('TypeCompetenceListComponent', () => {
  let component: TypeCompetenceListComponent;
  let fixture: ComponentFixture<TypeCompetenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCompetenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCompetenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
