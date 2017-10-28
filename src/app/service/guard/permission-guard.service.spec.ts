import { PermissionGuardService } from './permission-guard.service';
import { TestBed, inject } from '@angular/core/testing';

describe('PermissionGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionGuardService]
    });
  });

  it('should be created', inject([PermissionGuardService], (service: PermissionGuardService) => {
    expect(service).toBeTruthy();
  }));
});
