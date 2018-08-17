import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";
import { TranslateModule, TranslateService, TranslateLoader } from "@ngx-translate/core";
import { SigninComponent } from "./signin/signin.component";
import { ResetComponent } from "./reset/reset.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";

export function reateTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/auth/', '.json');
}

@NgModule({
    declarations: [
        SigninComponent,
        ResetComponent,
        ProfileComponent        
    ],
    imports: [
        SharedModule,      
        AuthRoutingModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (reateTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    exports: [],
    providers: []
})
export class AuthModule {
    constructor(private readonly translate: TranslateService) {
        this.translate.setDefaultLang('zh-tw');
    }
}