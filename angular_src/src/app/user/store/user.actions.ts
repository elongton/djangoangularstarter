import { Action } from '@ngrx/store';
// import { NewUser } from '../models/newUser.model';

// export const TRY_CREATE_USER = '[User] Try to Create User';
export const STORE_TOKEN = '[User] Add Verify Token';

// export class TryCreateUser implements Action {
//   readonly type = TRY_CREATE_USER;
//   constructor(public payload: NewUser){}
// }
export class StoreToken implements Action {
  readonly type = STORE_TOKEN;
  constructor(public payload: String){
    console.log('token stored')
  }
}


export type UserActions = 
              // TryCreateUser | 
              StoreToken;
