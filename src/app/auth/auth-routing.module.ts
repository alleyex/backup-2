import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { ProfileComponent } from "./profile/profile.component";
import { ResetComponent } from "./reset/reset.component";

const authRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'signin', component: SigninComponent },
            { path: 'reset', component: ResetComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }    
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }