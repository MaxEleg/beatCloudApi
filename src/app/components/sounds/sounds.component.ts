import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import {User, AppState, WebAuth} from '../../interfaces';


@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.css']
})
export class SoundsComponent implements OnInit {
  sounds;
  auth: WebAuth;

  constructor(private apiService: ApiService,  private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.auth;
    }).subscribe((auth: WebAuth) => {
      this.auth = auth;

      this.apiService.getUserSound(auth.token).subscribe(results=>{
        console.log(results);
        this.sounds = results;
      },err=>{
        alert(err.error.error.message|| err.msg);
      });
    });
  }
}
