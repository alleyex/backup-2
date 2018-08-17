import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

function TranslateLoaderApp(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/app/', '.json');
}

export const TranslateApp = TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderApp),
        deps: [HttpClient]
    }}
)



