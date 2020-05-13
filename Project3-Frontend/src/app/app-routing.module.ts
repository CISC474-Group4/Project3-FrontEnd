import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventsComponent } from './eventsc/events.component';



const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'restaurant', component: RestaurantComponent},
    {path:'event',component: EventsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
