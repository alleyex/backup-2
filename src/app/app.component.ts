import { Component } from '@angular/core';
import { DatabaeService } from './firebase/database.service';
import { Recipient } from './firebase/firebase.model';
import { AuthService } from './firebase/auth.service';
import { Observable, Subscribable } from '../../node_modules/rxjs';
import { auth } from '../../node_modules/firebase';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dorado';

  constructor() { }
  ngOnInit() {

    // this.authService.createUserWithEmail('alleyex@hotmail.com','abc123').subscribe(x=>{
    //   console.log(x);
    // });

    // this.authService.signInWithEmail('alleyex@hotmail.com', 'abc123').then(user => {
    //   if(user){
    //     console.log(user);
    //   }
    // }).catch(error=>{
    //   console.log(error.message);
    // });


  //   this.authService.userState().subscribe(user => {
  //     if (user) {
  //       console.log(user.email);
  //     }
  //   });

  //   this.authService.signOut();
  }
}
