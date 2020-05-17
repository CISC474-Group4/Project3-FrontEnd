import { Component, OnInit } from '@angular/core';
import { BackapiService } from '../services/backapi.service';
import { Restaurant } from '../restaurant/restaurant.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  loadedRestaurants;
  loadedEvents;
  constructor(private backapiService:BackapiService) { }

  ngOnInit(): void {
    console.log("Home");
    this.onFetchRestaurants();
  }

  onFetchRestaurants(){
    
    // this.backapiService.getRestaurantsFB().subscribe(response =>{
    //   this.loadedRestaurants = response;
    // })


    this.backapiService.getEventsAPI().subscribe(response =>{
      this.loadedEvents = response;
      console.log(response);
    });


    
    console.log(this.loadedRestaurants);
  }


}
