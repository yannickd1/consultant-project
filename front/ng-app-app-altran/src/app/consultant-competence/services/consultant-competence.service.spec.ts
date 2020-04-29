import { TestBed } from '@angular/core/testing';

import { ConsultantCompetenceService } from './consultant-competence.service';

describe('ConsultantCompetenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultantCompetenceService = TestBed.get(ConsultantCompetenceService);
    expect(service).toBeTruthy();
  });
});
