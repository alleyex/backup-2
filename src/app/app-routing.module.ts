import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './auth/profile/profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
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