import { Component, OnInit, Input } from '@angular/core';
import { BackapiService } from '../services/backapi.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() loadedEvent: Event;

  searchedEvent:any;

  constructor(private backapiService:BackapiService,private dataService:DataService) { }

  ngOnInit(): void {
    this.onFetchSearchedName();
    console.log(this.searchedEvent);
    this.onFetchEvents();
  }

  /**
   * Once Created, searched for event name
   */
  onFetchEvents(){

    this.backapiService.getRestaurantEventsAPI(this.searchedEvent).subscribe(response =>{
        this.loadedEvent = response;
        console.log(this.loadedEvent);
    });



    // console.log(this.loadedevents);
  }


  // onCreateEvent(eventsData: Events){
  //   this.backapiService.postRestaurantAPI(eventsData);
  // }

  /**
   * Retrieves Searched Name from Menu Component
   */
  onFetchSearchedName(){
    this.dataService.currentEvent().subscribe(searchedEvent => this.searchedEvent = searchedEvent);
  }


}
