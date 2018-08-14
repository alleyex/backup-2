import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../firebase/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    constructor(private authService: AuthService) { }

    signinForm:FormGroup;
    ngOnInit(){
        this.signinForm = new FormGroup({
            'email':new FormControl(null,[Validators.required, Validators.email]),
            'password':new FormControl(null,Validators.required)
        });
    }

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

    onSubmit(){
        console.log(this.signinForm);
    }
}
