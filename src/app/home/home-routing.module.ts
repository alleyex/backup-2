import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

const homeRoutes = [
    { path: '', component: HomeComponent }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule],
    
})
export class HomeRoutingModule { }