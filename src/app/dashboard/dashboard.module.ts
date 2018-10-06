import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module"; 
import { TranslateService } from "@ngx-translate/core";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent
    ],
    imports: [
        SharedModule       
    ],
    exports: [DashboardComponent]
})
export class DashboardModule {
    constructor(private readonly translate: TranslateService) {
        this.translate.setDefaultLang('zh-tw');
    }
}