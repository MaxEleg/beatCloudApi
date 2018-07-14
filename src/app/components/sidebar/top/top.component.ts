import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../../services/api/api.service';
import {User, AppState, WebAuth} from '../../../interfaces/index';

import * as AuthActions from '../../../stores/auth/auth.actions';


@Component({
  selector: 'app-top-sidebar',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopSideBarComponent implements OnInit {
  errors: any[] = [];
  auth: WebAuth;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.auth;
    }).subscribe((auth: WebAuth) => {
      this.auth = auth;
    });
  }
}
