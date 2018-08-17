import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,      
        HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    exports: []
})
export class HomeModule {
    constructor(private readonly translate: TranslateService) {
        this.translate.setDefaultLang('zh-tw');
    }
}