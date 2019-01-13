import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { VerifyComponent } from '../auth/verify/verify.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from '../auth/change-password/change-password.component';
import { LandingComponent} from '../landing/landing.component';
import { ProfileComponent } from '../user/profile/profile.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'verify', component: VerifyComponent},
  {path: 'verify/:key', component: VerifyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'password-change', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
