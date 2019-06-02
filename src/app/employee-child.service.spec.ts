import { TestBed } from '@angular/core/testing';

import { EmployeeChildService } from './employee-child.service';

describe('EmployeeChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeChildService = TestBed.get(EmployeeChildService);
    expect(service).toBeTruthy();
  });
});
