import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoggedInService  } from './Services/logged-in.service';
import { NotLoggedInService  } from './Services/not-logged-in.service';
const routes: Routes = [
  {path:'Login',  component:LoginComponent, canActivate:[NotLoggedInService]},
  {path:'Signup',  component:SignupComponent, canActivate:[NotLoggedInService]},
  {path:'Profile',  component:ProfileComponent, canActivate:[LoggedInService]},
  {path:'RequestReset',  component:RequestResetComponent, canActivate:[NotLoggedInService]},
  {path:'ResponsetReset',  component:ResponseResetComponent, canActivate:[NotLoggedInService]},
  {path:'Navbar',  component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [
  LoginComponent,SignupComponent,ProfileComponent,RequestResetComponent,ResponseResetComponent,
  NavbarComponent
];
