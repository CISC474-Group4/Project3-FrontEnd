import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant/restaurant.model';
import { BackapiService } from '../services/backapi.service';
import {Events} from '../eventsc/events.model';

@Component({
  selector: 'app-eventcard-horizontal',
  templateUrl: './eventcard-horizontal.component.html',
  styleUrls: ['./eventcard-horizontal.component.css']
})
export class EventcardHorizontalComponent implements OnInit {


  @Input() eventInfo: Events;

  constructor(private backapiService:BackapiService) { }

  ngOnInit(): void {
  }



  onFetchRestaurantInfo(){
    
  }


}
