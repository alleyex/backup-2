import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../firebase/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    constructor(private authService: AuthService, private readonly translate: TranslateService) {
        this.translate.setDefaultLang('zh-tw');
    }

    signinForm: FormGroup;
    ngOnInit() {
        this.signinForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
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

    onSubmit() {
        console.log(this.signinForm);
    }
}
