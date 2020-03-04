import { TestBed } from '@angular/core/testing';

import { GalleryResizeService } from './gallery-resize.service';

describe('GalleryResizeService', () => {
  let service: GalleryResizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryResizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
