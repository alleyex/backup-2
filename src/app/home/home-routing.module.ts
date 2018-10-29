import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './convenience/information/information.component';

const homeRoutes = [
    { path: '', component: HomeComponent },
    { path: 'information', component: InformationComponent }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
