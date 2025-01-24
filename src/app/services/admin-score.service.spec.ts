import { TestBed } from '@angular/core/testing';

import { AdminScoreService } from './admin-score.service';

describe('AdminScoreService', () => {
  let service: AdminScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
