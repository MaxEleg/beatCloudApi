import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, Meal, WebAuth } from '../../interfaces';
import * as MealActions from '../../stores/cart/cart.actions';
import * as AuthActions from '../../stores/auth/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
})
export class RootComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  loadWebAuth() {
    const authItem: WebAuth = JSON.parse(localStorage.getItem('authItem'));
    if (authItem && authItem.isAuth) {
      console.log(authItem);
      this.store.dispatch(new AuthActions.LoginIn(authItem));
    }else{
      this.store.dispatch(new AuthActions.LogOut());
    }
  }
  ngOnInit() {
    this.loadWebAuth();
  }
}
