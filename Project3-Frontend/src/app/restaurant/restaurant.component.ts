import { Component, OnInit } from '@angular/core';
import { BackapiService } from '../services/backapi.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map, catchError } from 'rxjs/operators';
import {Restaurant} from '../restaurant/restaurant.model';
import { Events } from '../eventsc/events.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  // template:'{{loadedRestaurantInfo.name}}',
  styleUrls: ['./restaurant.component.css'],
  providers:[BackapiService] //BackapiService
})
export class RestaurantComponent implements OnInit {
  loadedRestaurantInfo = [];
  loadedevents = [];
  loadedtags= [];
  loadedDescription: any;
  loadedName: any;
  loadedLocation: any;
  searchedName: string;
  subscription:any;



  constructor(
    private backapiService: BackapiService,
    private dataService: DataService,){   }

  ngOnInit(): void {
  
    
    this.onFetchSearchedName();
    if(this.searchedName != null){
    this.onFetchRestaurant(this.searchedName);//Http.get(rootURL + "searchedName")
    this.onFetchEvents();
  }

    
    console.log(this.loadedevents);
    

  }


  /**
   * Calls backapiService.getRestaurantsFB() and parses through
   */
  // onFetchRestaurants(){
  //   this.backapiService.getRestaurantsFB().subscribe(response =>{
  //     this.loadedrestaurants = response;
  //     console.log(this.loadedrestaurants);
  // });
  // console.log(this.loadedrestaurants);
  // }

  /**
   * Fetch Restaurant info
   * @param name 
   */
  onFetchRestaurant(name:string){
    this.backapiService.getRestaurantAPI(name).subscribe(response =>{
        this.loadedRestaurantInfo = response;
        console.log(this.loadedRestaurantInfo);
      });

  }

  /**
   * Get All Events
   */
  onFetchEvents(){
    this.backapiService.getRestaurantEventsAPI(this.searchedName).subscribe(response =>{
        this.loadedevents = response;
        console.log(this.loadedevents);
    });



    console.log(this.loadedevents);
  }


  onCreateRestaurant(restaurantData: Restaurant){
    this.backapiService.postRestaurantAPI(restaurantData);
  }

  /**
   * Retrieves Searched Name from Menu Component
   */
  onFetchSearchedName(){
    this.dataService.currentRestaurant().subscribe(searchedName => this.searchedName = searchedName);
  }

}
