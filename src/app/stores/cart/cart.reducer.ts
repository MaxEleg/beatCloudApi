import { Meal } from '../../interfaces/index';
import * as MealActions from './cart.actions';

export type Action = MealActions.All;

export function CartReducer(state: Meal[] = [], action: Action) {
  switch (action.type ) {
    case MealActions.ADD_MEAL:
      const newState: Meal[] = [ ...state, action.payload];
      localStorage.setItem('cartItems', JSON.stringify(newState));
      return newState;
    case MealActions.REMOVE_MEAL:
      state.splice(action.payload, 1);
      localStorage.setItem('cartItems', JSON.stringify(state));
      return state;
    case MealActions.REMOVE_ALL:
      localStorage.setItem('cartItems', '[]');
      return  [];
    default:
      return state;
  }
}
