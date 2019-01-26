import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { VerifyComponent } from '../auth/verify/verify.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from '../auth/change-password/change-password.component';
import { WorkflowSampleRemovemeComponent} from '../workflow-sample-removeme/workflow-sample-removeme.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { ResetConfirmComponent } from '../auth/reset-password/reset-confirm/reset-confirm.component';


const routes: Routes = [
  {path: '', component: WorkflowSampleRemovemeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'verify', component: VerifyComponent},
  {path: 'verify/:key', component: VerifyComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'reset/confirm/:token/:uid', component: ResetConfirmComponent},
  {path: 'password-change', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
