import { TestBed, inject } from '@angular/core/testing';

import { CkeditorService } from './ckeditor.service';

describe('CkeditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CkeditorService]
    });
  });

  it('should be created', inject([CkeditorService], (service: CkeditorService) => {
    expect(service).toBeTruthy();
  }));
});
