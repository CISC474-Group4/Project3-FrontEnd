import { Component, OnInit } from '@angular/core';
import { BackapiService } from '../services/backapi.service';
import { Restaurant } from '../restaurant/restaurant.model';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  loadedRestaurants;
  loadedEvents;
  constructor(private backapiService:BackapiService,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    console.log("Home");
    this.onFetchRestaurants();
    this.backapiService.getEventIDAPI("5ec08d18a46a4c1baf9f0d48").subscribe(response => console.log(response));
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

  onEventCardClick($event){
    var searchedEvent =(<HTMLInputElement>event.target).innerText ;
    this.dataService.changeEvent((<HTMLInputElement>event.target).innerText);
      
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/events']);
    }); 

    // this.backapiService.getEventRestaurantsAPI().subscribe(response =>{
    //   this.loadedrestaurants = response;
    // });

      // console.log( (<HTMLInputElement>event.target).innerText)

  }

}
