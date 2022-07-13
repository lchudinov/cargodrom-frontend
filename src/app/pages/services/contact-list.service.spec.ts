import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContactListService } from './contact-list.service';

describe('ContactListService', () => {
  let service: ContactListService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ContactListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
