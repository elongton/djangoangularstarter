import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from '../auth/password/change/change-password.component';
import { WorkflowSampleRemovemeComponent} from '../workflow-sample-removeme/workflow-sample-removeme.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { HomeComponent } from '../home/home.component';
import { VerifyComponent } from '../auth/verify-account/verify.component';
import { ResetPasswordComponent } from '../auth/password/reset/reset-password.component';
import { ResetConfirmComponent } from '../auth/password/reset/confirm/reset-confirm.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';


const routes: Routes = [
  {path: '', component: WorkflowSampleRemovemeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verify', component: VerifyComponent},
  {path: 'verify/:key', component: VerifyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'reset/confirm', component: ResetConfirmComponent},
  {path: 'reset/confirm/:token/:uid', component: ResetConfirmComponent},
  {path: 'change-password', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
