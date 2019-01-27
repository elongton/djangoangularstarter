import { Injectable } from '@angular/core';
import { NewUser } from './models/newUser.model';
import { LoginCredentials } from './models/loginCredentials.model';
import { Token } from './models/token.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/auth.actions';
import * as UIActions from'../shared/store/ui/ui.actions';
import * as fromApp from '../store/app.reducer'
import { Observable, throwError } from 'rxjs';
import { catchError, retry, flatMap, map } from 'rxjs/operators';

@Injectable()
export class AuthHttpService{
  constructor(private http: HttpClient,
              private store: Store<fromApp.AppState>){}

  private rootdomain                  =    'http://localhost:8000/';

  private djangoRegister              =    this.rootdomain + 'rest-auth/registration/';
  private djangoVerify                =    this.rootdomain + 'rest-auth/registration/verify-email/';
  private djangoLogin                 =    this.rootdomain + 'rest-auth/login/';
  private djangoLogout                =    this.rootdomain + 'rest-auth/logout/';
  private djangoVerifyToken           =    this.rootdomain + 'jwt/token-verify/';
  private djangoResetPasswordRequest  =    this.rootdomain + 'rest-auth/password/reset/';
  private djangoResetPasswordConfirm  =    this.rootdomain + 'rest-auth/password/reset/confirm/';
  private djangoChangePassword        =    this.rootdomain + 'rest-auth/password/change/';


  register(user: NewUser){
    // this.store.dispatch(new UI.StartLoading())
    return this.http.post<Token>(this.djangoRegister, user)
    .pipe(
      result => {
        this.store.dispatch(new AuthActions.Signin())
        return result;
      }
    )//pipe
  }
  verify(key:any){
    return this.http.post(this.djangoVerify, key)
  }
  login(credentials: LoginCredentials){
    this.store.dispatch(new UIActions.StartLoading())
    return this.http.post<Token>(this.djangoLogin, credentials)
    .pipe(result => {
          this.store.dispatch(new AuthActions.Signin())
          console.log('this is the result', result);
          return result;
        }
    )

  }//login
  logout(){
    return this.http.post(this.djangoLogout, {})
    .pipe(
      result => {
        this.store.dispatch(new AuthActions.Logout())
        console.log(result);
        return result;
      }
    )//pipe
  }//logout()
  
  verify_token(token:any){
    return this.http.post(this.djangoVerifyToken, token)
  }

  reset_password(email){
    this.store.dispatch(new UIActions.StartLoading())
    return this.http.post(this.djangoResetPasswordRequest, email)
  }
  reset_password_confirm(resetConfirm){
    this.store.dispatch(new UIActions.StartLoading())
    return this.http.post(this.djangoResetPasswordConfirm, resetConfirm)
  }
  changePassword(passwordArray){
    this.store.dispatch(new UIActions.StartLoading())
    return this.http.post(this.djangoChangePassword, passwordArray)
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}`)
      for (let key in error.error){
        console.log(key + ' error');
        console.log(error.error[key][0]);
      }
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };//handleError


}//httpservice
