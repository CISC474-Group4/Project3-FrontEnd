import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BackapiService } from '../services/backapi.service';
import {DataService} from '../services/data.service'
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
  searchedName: string;


  constructor(private backapiService:BackapiService, private router:Router, private dataService:DataService) { }
  
  @Input()activeClass = 'active';
  
  ngOnInit(): void {

    this.dataService.currentRestaurant().subscribe(name => this.searchedName = name);

  }



  onUpdateSearchBar(event:any){
    this.restaurantName = (<HTMLInputElement>event.target).value
    this.dataService.changeRestaurant(this.restaurantName);
  }

  /**
   * Should Navigate to Restuarant Page Component
   * Maybe pass restaurant Name from serach bar
   */
  onSearchButtonClick(){

    
  this.dataService.changeRestaurant(this.restaurantName);  
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/restaurant']);
  }); 

    // console.log("clicked");
    //   this.router.navigate(['/restaurant'])
    //     .then(success => console.log('navigation success?' , success))
    //     .catch(console.error); 
    this.onFetchRestaurants();
  }

  onFetchRestaurants(){

    this.backapiService.getRestaurantsFB().subscribe(response =>{
      this.loadedrestaurants = response;
  });


  }


}
