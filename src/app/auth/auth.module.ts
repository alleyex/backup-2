import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FirebaseModule } from "../firebase/firebase.mudule";
import { MaterialModule } from "../material.module";
import { TranslateModule } from "@ngx-translate/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from "./signin/signin.component";
import { ResetComponent } from "./reset/reset.component";

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/app/', '.json');
}

@NgModule({
    declarations: [
        ProfileComponent,      
        SigninComponent,
        ResetComponent
    ],
    imports: [   
        BrowserAnimationsModule,   
        ReactiveFormsModule,
        FormsModule,
        FirebaseModule,
        MaterialModule,   
        TranslateModule
    ],
    exports: [
          
    ],
    providers: [],
})
export class AuthModule { }

