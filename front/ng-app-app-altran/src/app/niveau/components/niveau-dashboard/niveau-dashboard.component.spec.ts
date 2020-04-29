import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauDashboardComponent } from './niveau-dashboard.component';

describe('NiveauDashboardComponent', () => {
  let component: NiveauDashboardComponent;
  let fixture: ComponentFixture<NiveauDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
