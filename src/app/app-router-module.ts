import { NgModule } from "@angular/core";
import { RouterModule , Routes} from "@angular/router";


import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { HomeComponent } from "./components/home/home.component";

export const myRoutes=[
    LoginComponent,
    SignUpComponent,
    HomeComponent
]

const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'/signup',component:SignUpComponent},
    {path:'/login', component:LoginComponent}
]


@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRouterModule{}