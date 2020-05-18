import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventsComponent } from './eventsc/events.component';
import { SubmissionformComponent } from './submissionform/submissionform.component';



const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'restaurant', component: RestaurantComponent},
    {path:'events',component: EventsComponent},
    {path:'submissionform',component: SubmissionformComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
