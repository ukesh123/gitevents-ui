import { Component } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public eventService: EventService) {
  }
 
  owner :string = 'ukesh123';
  repo :string = 'gitevents';
  eventType :string;
  events: Event[] = [];

  getEvents() {
    this.events = [];
    this.eventService.getEvents(this.owner, this.repo, this.eventType).subscribe((events) => {
      events.forEach(event => {
        this.events.push(event);
      });
    });
    
  }

}
