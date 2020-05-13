import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventcard-vertical',
  templateUrl: './eventcard-vertical.component.html',
  styleUrls: ['./eventcard-vertical.component.css']
})
export class EventcardVerticalComponent implements OnInit {


  @Input() loadedEvent: Event;


  constructor() { }

  ngOnInit(): void {
  }

}
