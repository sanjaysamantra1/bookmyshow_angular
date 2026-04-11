import { Component } from '@angular/core';
import { EventFilter } from '../event-filter/event-filter';
import { EventService } from '../../services/event-service';

@Component({
  selector: 'app-event-list',
  imports: [EventFilter],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  constructor(public eventService: EventService) {}
}
