import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauCardComponent } from './niveau-card.component';

describe('NiveauCardComponent', () => {
  let component: NiveauCardComponent;
  let fixture: ComponentFixture<NiveauCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
