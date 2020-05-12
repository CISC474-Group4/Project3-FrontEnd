import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private restaurantSource = new BehaviorSubject('No-restaurant');
  // public currentRestaurant = this.restaurantSource.asObservable();

  constructor() { }



  changeRestaurant(restuarant:string){
    console.log(restuarant);
    this.restaurantSource.next(restuarant);
    console.log(this.restaurantSource);  
  }

  currentRestaurant(){
    console.log(this.restaurantSource);
    return this.restaurantSource.asObservable();
  }




}
