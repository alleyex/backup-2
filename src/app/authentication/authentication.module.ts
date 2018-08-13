import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FirebaseModule } from '../firebase/firebase.mudule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FirebaseModule,
        MaterialModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class AuthenticationModule { }