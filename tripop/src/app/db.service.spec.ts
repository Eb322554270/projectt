import { TestBed } from '@angular/core/testing';
import { dbService } from './db.service';

describe('dbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: dbService = TestBed.get(dbService);
    expect(service).toBeTruthy();
  });
});
