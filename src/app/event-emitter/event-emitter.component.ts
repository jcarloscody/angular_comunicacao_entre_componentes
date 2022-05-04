import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {

  value: number = 0;
  title = "My title";
  constructor() { }

  ngOnInit() {
  }

  incBy(event: number) {
    //console.log(event);
    this.value += event;
  }

}
