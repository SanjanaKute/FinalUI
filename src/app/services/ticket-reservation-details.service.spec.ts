import { TestBed } from '@angular/core/testing';

import { TicketReservationDetailsService } from '../admin-services/ticket-reservation-details.service';

describe('TicketReservationDetailsService', () => {
  let service: TicketReservationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketReservationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
