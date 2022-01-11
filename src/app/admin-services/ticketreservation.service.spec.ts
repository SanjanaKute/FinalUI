import { TestBed } from '@angular/core/testing';

import { TicketreservationService } from './ticketreservation.service';

describe('TicketreservationService', () => {
  let service: TicketreservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketreservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
