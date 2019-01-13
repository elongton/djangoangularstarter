import { Action } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer';
import * as AuthActions from './auth.actions';

export interface AuthState {
    token: String;
    authenticated: boolean;
};
const initialState: AuthState = {
    token: null,
    authenticated: false,
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.SIGNUP):
        case (AuthActions.SIGNIN):
            return {
                ...state,
                authenticated: true,
            };
        case (AuthActions.LOGOUT):
            return {
                ...state,
                token: null,
                authenticated: false,
            };
        case (AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }//switch
}
export const getAuthState = (state: AuthState) => state;
