import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthHttpService } from '../../../auth-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/app.reducer';
import * as UIActions from '../../../../shared/store/ui/ui.actions';

@Component({
  selector: 'app-reset-confirm',
  templateUrl: './reset-confirm.component.html',
  styleUrls: ['./reset-confirm.component.css']
})
export class ResetConfirmComponent implements OnInit {
  resetConfirmForm: FormGroup
  token: string
  uid: string
  djangoEmail: boolean = false;
  passwords: any;
  constructor(private httpService: AuthHttpService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    if (this.route.snapshot.params['uid'] && this.route.snapshot.params['token']){
      this.djangoEmail=true;
      //this condition occurs when user follows email sent from Django
      this.uid = this.route.snapshot.params['uid'];
      this.token = this.route.snapshot.params['token'];
      this.resetConfirmForm = new FormGroup({
        'new_password1': new FormControl('', Validators.required),
        'new_password2': new FormControl('', Validators.required),
      })
    }else{
      //this condition occurs when user clicks choose new password
      this.resetConfirmForm = new FormGroup({
        'new_password1': new FormControl('', Validators.required),
        'new_password2': new FormControl('', Validators.required),
        'uid': new FormControl('', Validators.required),
        'token': new FormControl('', Validators.required),
      })
    }    
  }

  onSubmit(){
    let resetConfirm = this.resetConfirmForm;
    if (this.route.snapshot.params['uid'] && this.route.snapshot.params['token']){
      //this condition occurs when user follows email sent from Django
      this.passwords = {
        uid: this.uid,
        token: this.token,
        new_password1: resetConfirm.value.new_password1,
        new_password2: resetConfirm.value.new_password2,
      }//passwords
    }else{
      //this condition occurs when user clicks choose new password
      this.passwords = {
        uid: resetConfirm.value.uid,
        token: resetConfirm.value.token,
        new_password1: resetConfirm.value.new_password1,
        new_password2: resetConfirm.value.new_password2,
      }//passwords
    }//if else

    //not happy with this solution - there must be a way to access the scope two levels up
    let myrouter = this.router;
    var mystore = this.store;
    this.httpService.reset_password_confirm(this.passwords)
      .subscribe({
        next(response){
          console.log('Success!')
          console.log(response);
          myrouter.navigate(['/']);
          mystore.dispatch(new UIActions.StopLoading())
        },
        error(err){console.log(err)},
      })

  }//onSubmit

}
