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
import { LandingComponent } from './landing/landing.component';
import { UserModule } from './user/user.module';

import {CookieService} from 'angular2-cookie/services/cookies.service';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
