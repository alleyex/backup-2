import { Component } from '@angular/core';
import { AuthService } from '../../firebase/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private authService: AuthService) { }

    login() {
        this.authService.signInWithEmail('alleyex@hotmail.com', 'abc123').catch(error => {
            console.log(error.message);
        });    

        this.authService.userState().subscribe(user => {
            if (user) {
                console.log(user.email);
            }
        });
    }
}
