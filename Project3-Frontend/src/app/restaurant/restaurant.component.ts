import { Component, OnInit } from '@angular/core';
import { BackapiService } from '../services/backapi.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map, catchError } from 'rxjs/operators';
import {Restaurant} from '../restaurant/restaurant.model';
import { Events } from '../eventsc/events.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers:[BackapiService] //BackapiService
})
export class RestaurantComponent implements OnInit {

  loadedrestaurants= [];
  loadedevents = [];



  constructor(private backapiService: BackapiService) { 
    
    // this.restaurant_name = backapiService.getRestuarant();
    // this.restaurant_info = backapiService.getLocation();

  }

  ngOnInit(): void {
  

    // this.backapiService.postEventsFB("some soem","some soem","dome dome","tarkndsies","tmgmgb","sophmber");
    // this.loadedevents= this.onFetchEvents();
    this.onFetchEvents();
    console.log(this.loadedevents);
    
    // this.getAllRestaurant();
  }

  /**
   * Calls backapiService.getRestaurantsFB() and parses through
   */
  onFetchRestaurants(){
    this.backapiService.getEventsFB().subscribe(response =>{
      this.loadedrestaurants = response;
      console.log(this.loadedrestaurants);
  });
  console.log(this.loadedrestaurants);
  }

  /**
   * Get All Events
   */
  onFetchEvents(){
    this.backapiService.getEventsFB().subscribe(response =>{
        this.loadedevents = response;
        console.log(this.loadedevents);
    });
    console.log(this.loadedevents);
  }


  onCreateRestaurant(restaurantData: Restaurant){
    this.backapiService.postRestaurantAPI(restaurantData);
  }

}
