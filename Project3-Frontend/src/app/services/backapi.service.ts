import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Restaurant} from '../restaurant/restaurant.model';
import {Events} from '../eventsc/events.model';
// import { start } from 'repl';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';



/**
 * 
 * This file enables communication with Custom API
 * http requests return observables
 * must subscribe to obtain oberservable info
*/


@Injectable({
  providedIn: 'root'
})
export class BackapiService {


  private path= 'http://localhost:3000/api/';/* ROOT PATH */
  private firebasepath = 'https://ng-project3-db.firebaseio.com/';



  constructor(private http:HttpClient) {

   }


  //fetches all restaurants
  getRestaurantsAPI():Observable<any>{
    
    // return this.http.get( this.path + "restaurants")
    // .pipe(map(responseData =>{
    //   const restaurantArray = [];
    //   for (const key in responseData){//Loops through all data in response
    //     if(responseData.hasOwnProperty(key)){
    //     restaurantArray.push({...responseData[key], id: key}) //Add new object {} into restaurantArray
    //     }
    //   }
    // }));
    return this.http.get(this.path + "restaurants");


  }


  /**
   * Gets all the Restaurants and returns restaurant with the same name
   * @param name 
   */
  getRestaurantAPI(name: string):Observable<any>{

 return this.http.get<{[key:string]:Restaurant}>(this.path + "restaurants")
    .pipe(
      map(response => {
      const restaurantArray: Restaurant[]= [];
      for(const key in response){
          if(response[key].name == name){
          restaurantArray.push({...response[key],id:key});
          console.log("Restuarant Array"+restaurantArray);
          }
      }
      return restaurantArray;
    }));
  }

  //fetches all events
  getEventsAPI():Observable<any>{
      
    // return this.http.get( this.path + "events")
    // .pipe(map(responseData =>{
    //   const eventArray = [];
    //   for (const key in responseData){//Loops through all data in response
    //     if(responseData.hasOwnProperty(key)){
    //     eventArray.push({...responseData[key], id: key}) //Add new object {} into restaurantArray
    //     }
    //   }
    // }));
    return this.http.get(this.path + "events");

  }


  getRestaurantEventsAPI(name:string):Observable<any>{

    return this.http.get<{[key:string]:Events}>(this.path + "events")
    .pipe(
      map(response => {
      const eventArray: Events[]= [];
      for(const key in response){

          if(response[key].restaurant == name){
          eventArray.push({...response[key],_id:key});
          console.log("Event Array"+eventArray);
          }
      }
      return eventArray;
    }));


  }


  //Add a new Restaurant
  postRestaurantAPI(restaurantData: Restaurant){

    this.http.post(this.path + "restuarant", restaurantData)
      .subscribe(responseData => {
        console.log(responseData);
      });

  }
  

   /**
   * Posts Events to API
   * 
   * @param event_name 
   * @param id 
   * @param restaurant_name 
   * @param description 
   * @param location 
   * @param img_url 
   */
  postEventsAPI( title:string,restaurant: string,id: string,
    description:string,img_url: string, starttime:string, endtime:string){
    const postData: Events = {
      title:title,
      _id:id ,
      restaurant:restaurant,
      description:description,
      img_url: img_url,
      starttime: starttime,
      endtime:endtime
    };

    this.http.post<{[key:string]:Events}>(this.path + "events",
      postData).subscribe(responseData => {
        console.log(responseData);
      });

  }




  /**
   * Gets all Restaurants
   */
  // getRestaurantsFB(){
    
  //   return this.http.get<{[key:string]:Restaurant}>("https://ng-project3-db.firebaseio.com/restaurants.json")
  //   .pipe(
  //     map(response => {
  //     const restaurantArray: Restaurant[]= [];
  //     for(const key in response){
  //         restaurantArray.push({...response[key],id:key});
  //         console.log(restaurantArray);
  //     }
  //     return restaurantArray;
  //   }));

  // }


  // getRestaurantFB(name: string){
  //   return this.http.get<{[key:string]:Restaurant}>("https://ng-project3-db.firebaseio.com/restaurants.json")
  //   .pipe(
  //     map(response => {
  //     const restaurantArray: Restaurant[]= [];
  //     for(const key in response){

  //       // if(key == name){
  //       //   for(const t in response[key]){
  //       //   console.log({...response[key]});
  //       //   }
  //       // }

  //         if(key == name){
  //         restaurantArray.push({...response[key],id:key});
  //         console.log("Restuarant Array"+restaurantArray);
  //         }
  //     }
  //     return restaurantArray;
  //   }));

  // }



  /**
   * Return an Observable containing all all Events
   */
  // getEventsFB(){
      

  //   return this.http.get<{[key:string]:Events}>("https://ng-project3-db.firebaseio.com/events.json")
  //   .pipe(
  //     map(response => {
  //     const eventsArray: Events[]= [];
  //     for(const key in response){
  //         eventsArray.push({...response[key],id:key});
  //         console.log(eventsArray);
  //     }
  //     return eventsArray;
  //   }));
    
  // }






  // /**
  //  * Posts Events to FireBase
  //  * 
  //  * @param event_name 
  //  * @param id 
  //  * @param restaurant_name 
  //  * @param description 
  //  * @param location 
  //  * @param img_url 
  //  */
  // postEventsFB( event_name:string,id: string,restaurant_name: string,
  //   description:string,location:string,img_url: string){
  //   const postData: Events = {
  //     event_name:event_name,
  //     id: id,
  //     restaurant_name:restaurant_name,
  //     description:description,
  //     location:location,
  //     img_url: img_url
  //   };

  //   this.http.post<{[key:string]:Events}>("https://ng-project3-db.firebaseio.com/events.json",
  //     postData).subscribe(responseData => {
  //       console.log(responseData);
  //     });

  // }



  // /**
  //  * Posts New Restaurants to DataBase
  //  * 
  //  * @param name 
  //  * @param id 
  //  * @param description 
  //  * @param location 
  //  * @param img_url 
  //  */
  // postRestaurantFB(name:string,
  //   id: string,
  //   description:string,
  //   location:string,
  //   img_url: string,){

  //   const postData: Restaurant = {
  //     name:name,
  //     id: id,
  //     description:description,
  //     location:location,
  //     img_url: img_url
  //   };

  //   this.http.post<{[key:string]:Events}>("https://ng-project3-db.firebaseio.com/restaurants.json",
  //     postData).subscribe(responseData => {
  //       console.log(responseData);
  //     });

  // }
  





  

  
  getRestuarant(): string{
    return "Chipotle";
  }
  
  getLocation(): string{
    return "32 E.Main St";
  }




}
