import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'user', loadChildren: './auth/auth.module#AuthModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, { enableTracing: true })
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}