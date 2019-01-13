import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewUser } from '../models/newUser.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
// import * as US from '../store/user.actions';
import { Router } from '@angular/router';
import { AuthHttpService } from '../auth-http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  user_submit: NewUser
  user: NewUser
  mystore = this.store

  constructor(private store: Store<fromRoot.AppState>,
              private router: Router,
              private httpService: AuthHttpService,) { }

  randnum() {
    let rand = Math.floor(Math.random() * 1000) + 1;
    return rand;
  }


  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl('sample'+ this.randnum().toString() + '@gmail.com', [Validators.required, Validators.email]),
      'username': new FormControl('a'+ this.randnum().toString(), Validators.required),
      'password1': new FormControl('aaaaaa', Validators.required),
      'password2': new FormControl('aaaaaa', Validators.required),

    })
  }//ngOnInit()


  onSubmit(){
    let signupForm = this.signupForm;
    this.user_submit = new NewUser(
      signupForm.value.username,
      signupForm.value.password1,
      signupForm.value.password2,
      signupForm.value.email,
    )

    console.log(this.user_submit)
    // this.store.dispatch(new US.TryCreateUser(this.user_submit)) //tries to create user, navigates off page if successful
    this.httpService.register(this.user_submit)
      .subscribe({
        next(response){
          // mystore.dispatch(new UI.StopLoading());
          console.log(response);
        },
        error(err){console.log(err)},
      });
  }//onSubmit


}//SignupComponent
