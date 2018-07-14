import { Action } from '@ngrx/store';
import { Meal } from '../../interfaces/index';

export const ADD_MEAL = 'ADD_MEAL';
export const REMOVE_MEAL = 'REMOVE_MEAL';
export const REMOVE_ALL = 'REMOVE_ALL';

export class AddMeal implements Action {
  readonly type = ADD_MEAL;
  constructor(public payload: Meal) {}
}

export class RemoveMeal implements Action {
  readonly type = REMOVE_MEAL;
  constructor(public payload: number) {}
}

export class RemoveAll implements Action {
  readonly type = REMOVE_ALL;
  constructor() {}
}

export type All = AddMeal | RemoveMeal | RemoveAll;
