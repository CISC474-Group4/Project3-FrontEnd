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
    this.restaurantSource.next(restuarant);
  }

  currentRestaurant(){
    return this.restaurantSource.asObservable();
  }




}
