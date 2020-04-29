import { TestBed } from '@angular/core/testing';

import { TypeCompetenceService } from './type-competence.service';

describe('TypeCompetenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCompetenceService = TestBed.get(TypeCompetenceService);
    expect(service).toBeTruthy();
  });
});
