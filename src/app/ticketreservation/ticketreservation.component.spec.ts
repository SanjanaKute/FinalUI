import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketreservationComponent } from './ticketreservation.component';

describe('TicketreservationComponent', () => {
  let component: TicketreservationComponent;
  let fixture: ComponentFixture<TicketreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
