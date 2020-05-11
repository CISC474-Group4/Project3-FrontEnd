import { Component, OnInit, Input } from '@angular/core';
import { BackapiService } from '../services/backapi.service';
import {Router} from '@angular/router'
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[BackapiService]
})



export class MenuComponent implements OnInit {
  restaurantName = "";
  loadedrestaurants= [];

  constructor(private backapiService:BackapiService, private router:Router) { }
  
  @Input()activeClass = 'active';
  
  ngOnInit(): void {
  }



  onUpdateSearchBar(event:any){
    this.restaurantName = (<HTMLInputElement>event.target).value
    console.log(this.restaurantName);
  }

  /**
   * Should Navigate to Restuarant Page Component
   * Maybe pass restaurant Name from serach bar
   */
  onSearchButtonClick(){
    console.log("clicked");
      this.router.navigate(['/restaurant'])
        .then(success => console.log('navigation success?' , success))
        .catch(console.error); 
    console.log(this.restaurantName);
    this.onFetchRestaurants();
  }


  onFetchRestaurants(){

    this.backapiService.getRestaurantsFB().subscribe(response =>{
      this.loadedrestaurants = response;
      console.log(this.loadedrestaurants);
      console.log(response);
  });
  console.log(this.loadedrestaurants);


  }


}
