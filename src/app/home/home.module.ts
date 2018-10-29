import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DiscountComponent } from './discount/discount.component';
import { ConvenienceComponent } from './convenience/convenience.component';
import { RelatedComponent } from './related/related.component';
import { RealtimeService } from './realtime/realtime.service';
import { RoadComponent } from './realtime/road/road.component';
import { PackageComponent } from './discount/package/package.component';
import { MediaComponent } from './weather/media/media.component';
import { WeatherComponent } from './weather/weather.component';
import { StationComponent } from './weather/station/station.component';
import { WeatherService } from './weather/weather.service';
import { AnnouncementComponent } from './bulletin/announcement/announcement.component';
import { NewsComponent } from './bulletin/news/news.component';
import { DialogComponent } from './bulletin/dialog.component';
import { InformationComponent } from './convenience/information/information.component';
import { PopupComponent } from './discount/popup.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
    declarations: [
        HomeComponent,
        CategoryComponent,
        RealtimeComponent,
        BulletinComponent,
        DiscountComponent,
        RelatedComponent,
        ConvenienceComponent,
        RoadComponent,
        PackageComponent,
        WeatherComponent,
        MediaComponent,
        StationComponent,
        AnnouncementComponent,
        NewsComponent,
        DialogComponent,
        InformationComponent,
        PopupComponent
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
    providers: [RealtimeService, WeatherService],
    entryComponents: [DialogComponent, PopupComponent]
})
export class HomeModule {
    constructor(private readonly translate: TranslateService) {
        this.translate.setDefaultLang('zh-tw');
    }
}
