import { TestBed } from '@angular/core/testing';

import { AddVideosElementService } from './add-videos-element.service';

describe('AddVideosElementService', () => {
  let service: AddVideosElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVideosElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
