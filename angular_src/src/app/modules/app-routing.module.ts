import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { VerifyComponent } from '../auth/verify/verify.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from '../auth/change-password/change-password.component';
import { LandingComponent} from '../landing/landing.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { ResetConfirmationComponent } from '../auth/reset-password/reset-confirmation/reset-confirmation.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'verify', component: VerifyComponent},
  {path: 'verify/:key', component: VerifyComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'reset/confirmation', component: ResetConfirmationComponent},
  {path: 'password-change', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
