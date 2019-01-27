import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthHttpService } from '../../auth-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducer';
import * as UIActions from '../../../shared/store/ui/ui.actions';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passwordChangeForm: FormGroup
  token: string
  uid: string
  djangoEmail: boolean = false;
  passwords: any;
  constructor(private httpService: AuthHttpService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
      this.passwordChangeForm = new FormGroup({
        'new_password1': new FormControl('aaaaaa298', Validators.required),
        'new_password2': new FormControl('aaaaaa298', Validators.required),
        'old_password': new FormControl('aaaaaa', Validators.required),
      }) 
  }

  onSubmit(){
    let passwordChangeForm = this.passwordChangeForm;
    this.passwords = {
      new_password1: passwordChangeForm.value.new_password1,
      new_password2: passwordChangeForm.value.new_password2,
    }

    //not happy with this solution - there must be a way to access the scope two levels up
    let myrouter = this.router;
    var mystore = this.store;
    this.httpService.changePassword(this.passwords)
      .subscribe({
        next(response){
          console.log('Success!')
          // console.log(response);
          myrouter.navigate(['/']);
          mystore.dispatch(new UIActions.StopLoading())
        },
        error(err){console.log(err.error.detail)},
      })

  }//onSubmit

}

