import * as AuthActions from './auth.actions';
import { WebAuth } from '../../interfaces/';

export type Action = AuthActions.All;


const defaultState: WebAuth = {
  firstName: '',
  lastName: '',
  phone: '',
  mail: '',
  rank: 0,
  token: '',
  isAuth: false
};


export function AuthReducer(state: WebAuth = defaultState, action: Action) {
  switch (action.type ) {
    case AuthActions.LOGIN_IN:
      const newState: WebAuth = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        mail: action.payload.mail,
        rank: action.payload.rank,
        token: action.payload.token,
        isAuth: true
      };
      localStorage.setItem('authItem', JSON.stringify(newState));
      return newState;
    case AuthActions.LOG_OUT:
      localStorage.setItem('authItem', JSON.stringify(defaultState));
      return defaultState;
    default:
      return state;
  }
}
