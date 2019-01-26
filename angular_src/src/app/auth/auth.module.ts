import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

//components
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthComponent } from './auth.component';

//modules
import { AppRoutingModule } from '../modules/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { CoreModule } from '../modules/core.module';

//services
import { AuthHttpService } from './auth-http.service';
import { ResetConfirmComponent } from './reset-password/reset-confirm/reset-confirm.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    VerifyComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    AuthComponent,
    ResetConfirmComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CoreModule
  ],
  providers: [AuthHttpService],
})
export class AuthModule {}
