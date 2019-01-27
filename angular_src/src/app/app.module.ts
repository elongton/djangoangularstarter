import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';


import { reducers } from './store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/store/user.effects';

import { MaterialModule } from './modules/material.module';
import { CoreModule } from './modules/core.module';
import { WorkflowSampleRemovemeComponent } from './workflow-sample-removeme/workflow-sample-removeme.component';
import { UserModule } from './user/user.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faLongArrowAltDown, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';


import {CookieService} from 'angular2-cookie/services/cookies.service';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './shared/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowSampleRemovemeComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    AuthModule,
    MaterialModule,
    CoreModule,
    FontAwesomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [CookieService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faLongArrowAltDown);
    library.add(faLongArrowAltRight);
  }
}
