import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

//components
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';

//modules
import { AppRoutingModule } from '../modules/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { CoreModule } from '../modules/core.module';

//services
// import { UserHttpService } from './user-http.service';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CoreModule
  ],
  providers: [],//[UserHttpService],
})
export class UserModule {}
