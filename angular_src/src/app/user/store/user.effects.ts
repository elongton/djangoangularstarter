import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects'
// import { NewUser } from '../models/newUser.model';
// import { Token } from '../models/token.model';
import * as UserActions from './user.actions';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
// import { UserHttpService } from '../user-http.service';

import * as UIActions from '../../shared/store/ui/ui.actions';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer';

import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              // private httpService: UserHttpService,
              private store: Store<fromRoot.AppState>,
              private router: Router){}


  // @Effect()
  // addUser = this.actions$
  //   .ofType(UserActions.TRY_CREATE_USER)
  //   .pipe(map((action: UserActions.TryCreateUser) => {
  //           return action.payload;
  //         }),
  //         mergeMap((user: NewUser) => {
  //           return this.httpService.register(user)
  //         }),
  //         map((response:Token) => {
  //           console.log(response);
  //           this.store.dispatch(new UI.StopLoading());
  //           this.router.navigate(['']) //navigates home (for now)
  //           return new UserActions.StoreToken(response.token);
  //         })
  //       )//pipe

}//UserEffects
