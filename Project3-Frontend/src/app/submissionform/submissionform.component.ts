import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Events } from '../eventsc/events.model';
import { BackapiService } from '../services/backapi.service';
import { Restaurant } from '../restaurant/restaurant.model';

@Component({
  selector: 'app-submissionform',
  templateUrl: './submissionform.component.html',
  styleUrls: ['./submissionform.component.css']
})
export class SubmissionformComponent implements OnInit {

  createForm: FormGroup;
  // favoriteColorControl = new FormControl('');
  FormTypeCheck: any;
  restaurant_data: Restaurant;
  // formdescription;

  constructor(private backendapiService: BackapiService){}


  ngOnInit(){
    this.createForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'restaurant_address': new FormControl(null),
      'event_restaurant': new FormControl(null),
      'description' : new FormControl(''),
      'formtype': new FormControl('event'),
      'start_time': new FormControl(null),
      'end_time': new FormControl(null),
      'img_file': new FormControl(null)

    });
  }
  

  onSubmit(){

    console.log(this.createForm);
    console.log(this.createForm.value);
    console.log(this.createForm.value.description);

    const formdescription = this.createForm.value.description;
    const formstarttime =  this.createForm.value.start_time;
    const formendtime = this.createForm.value.end_time
    const formtitle = this.createForm.value.name;
    const formrestaurant = this.createForm.value.event_restaurant;
    const formaddress = this.createForm.value.restaurant_address;
    const img_file = this.createForm.value.img_file;

    


    if(this.createForm.value.formtype == "events"){

      // event_Data.starttime =
      // event_Data.title = 
      // event_Data.restaurant = 
      // console.log(event_Data);

    //   title:string,restaurant: string,id: string,
    // description:string,img_url: string, starttime:string, endtime:string



      this.backendapiService.postEventsAPI(formtitle,formrestaurant,null,
                                          formdescription,null,formstarttime,formendtime);

    }

    if(this.createForm.value.formtype == "restaurant"){
      this.backendapiService.postOtherRestaurantAPI(formtitle,formdescription,formaddress,img_file);


    }
  }

}
