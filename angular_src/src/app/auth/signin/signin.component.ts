import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginCredentials } from '../models/loginCredentials.model';
import { AuthHttpService } from '../auth-http.service';
import { CookieService } from 'angular2-cookie/core';
// import * as UserActions from '../store/user.actions';
import { Token } from '../models/token.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UIActions from '../../shared/store/ui/ui.actions';
// import * as US from '../store/user.actions';
import * as fromRoot from '../../store/app.reducer'




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup
  creds: LoginCredentials
  token: Token

  constructor(private store: Store<fromRoot.AppState>,
              private httpService: AuthHttpService,
              private router: Router,
              private cookie: CookieService,) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('a', Validators.required),
      'password': new FormControl('aaaaaa', Validators.required),
    })
  }

  onSubmit(){
    let loginForm = this.loginForm;
    this.creds = new LoginCredentials(
      loginForm.value.username,
      loginForm.value.password,
    )


    //not happy with this solution - there must be a way to access the scope two levels up
    let myrouter = this.router;
    var mycookie = this.cookie;
    var mystore = this.store;
    this.httpService.login(this.creds)
      .subscribe({
        next(response){
          console.log('Success!')
          console.log(response);
          mycookie.put('token', response.token);
          myrouter.navigate(['home']);
          mystore.dispatch(new UIActions.StopLoading())
        },
        error(err){console.log(err)},
      })
    }//onSubmit()

  navOut(){
    this.router.navigate(['']);
  }


}
