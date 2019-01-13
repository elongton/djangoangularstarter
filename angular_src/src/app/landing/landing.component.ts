import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
// import * as fromUser from '../user/store/user.reducer';
import { AuthHttpService } from '../auth/auth-http.service';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs';

interface tokenthing {
    token: String;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  token: String;
  authState: Observable<fromAuth.AuthState>

  constructor(private store: Store<fromRoot.AppState>,
              private httpService: AuthHttpService,
              private cookie: CookieService,) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  checkStatus(){
    if(this.token){
      console.log('Logged in locally, here\'s the token:')
      console.log(this.token)
      let mytoken = {token: this.token};
      this.httpService.verify_token(mytoken)
        .subscribe({
          next(response:tokenthing) {console.log('Django says it\'s a good token'); console.log(response.token);},
          error() {console.log('bad key')}
          })
    }else{
      console.log('Not logged in yet.')
    }
  }
  
  resetPassword(){
    console.log("send user an email and notify that the email was sent");
  }

  setCookie(){this.cookie.put('test', 'testing cookie');}
  getCookie(){console.log(this.cookie.get('test'))}
  removeCookie(){this.cookie.remove('test');}


}//landingcomponent
