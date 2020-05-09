import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project3-Frontend';
  
  /*
  get loggedIn():boolean{
    return this.authSvc.loggedIn;
  }
  constructor(public authSvc:AuthService) {
    authSvc.authorize();
  }

  signout(){
    this.authSvc.logout();
    return false;
  }*/

}
