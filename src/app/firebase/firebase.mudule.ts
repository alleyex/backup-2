import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { DatabaeService } from './database.service';
import { config } from './firebase.model';
import * as firebase from 'firebase/app';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [       
    ],
    providers: [AuthService, DatabaeService],
})
export class FirebaseModule {
    constructor() {
        firebase.initializeApp(config);
    }
}