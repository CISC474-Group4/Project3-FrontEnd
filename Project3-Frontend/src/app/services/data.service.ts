import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private restaurantSource = new BehaviorSubject('No-restaurant');
  private eventSource = new BehaviorSubject("no-event");
  // public currentRestaurant = this.restaurantSource.asObservable();

  constructor() { }



  changeRestaurant(restuarant:string){
    this.restaurantSource.next(restuarant);
  }

  currentRestaurant(){
    return this.restaurantSource.asObservable();
  }

  currentEvent(){
    return this.eventSource.asObservable();
  }

  changeEvent(events:string){
    this.eventSource.next(events);
  }




}
