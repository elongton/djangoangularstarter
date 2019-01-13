// import { Action } from '@ngrx/store';
// import * as fromRoot from '../../store/app.reducer';
import { UserActions,
        // TRY_CREATE_USER, 
        STORE_TOKEN} from './user.actions';
// import { NewUser } from '../models/newUser.model';

export interface UserState {
  // new_user: NewUser;
  token: String;
};
const initialState: UserState = {
  // new_user: null,
  token: null,
};

export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    // case TRY_CREATE_USER:
    //   return {
    //     ...state,
    //     new_user: action.payload
    //   };
    case STORE_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default: {
      return state;
    }
  }
}
export const getUserState = (state: UserState) => state;
