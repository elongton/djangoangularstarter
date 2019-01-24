import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthHttpService } from '../../auth-http.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducer';
import * as UIActions from '../../../shared/store/ui/ui.actions';

@Component({
  selector: 'app-reset-confirmation',
  templateUrl: './reset-confirmation.component.html',
  styleUrls: ['./reset-confirmation.component.css']
})
export class ResetConfirmationComponent implements OnInit {
  resetForm: FormGroup
  constructor(private httpService: AuthHttpService,
              private router: Router,
              private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      'email': new FormControl('sample@gmail.com', Validators.required),
    })
  }

  onSubmit(){
    let resetForm = this.resetForm;
    let email = {
      email: resetForm.value.email
    }

    //not happy with this solution - there must be a way to access the scope two levels up
    let myrouter = this.router;
    var mystore = this.store;
    this.httpService.reset_password(email)
      .subscribe({
        next(response){
          console.log('Success!')
          console.log(response);
          myrouter.navigate(['profile']);
          mystore.dispatch(new UIActions.StopLoading())
        },
        error(err){console.log(err)},
      })

  }//onSubmit

}
