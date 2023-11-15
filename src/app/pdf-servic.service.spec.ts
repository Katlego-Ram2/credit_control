import { TestBed } from '@angular/core/testing';

import { PdfServicService } from './pdf-servic.service';

describe('PdfServicService', () => {
  let service: PdfServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
