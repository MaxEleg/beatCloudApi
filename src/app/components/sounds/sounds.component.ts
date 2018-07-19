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
  sounds : any = [];
  musics : any = [];
  albums: any = [];
  auth: WebAuth;

  constructor(private apiService: ApiService,  private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.auth;
    }).subscribe((auth: WebAuth) => {
      this.auth = auth;
      this.loadSounds();
      this.loadMusics();
    });
  }

  loadSounds(){
    console.log("loadSounds");
    this.apiService.getUserSound(this.auth.token).subscribe(results=>{
      this.sounds = results;
    },err=>{
      alert("Une erreur est survenue");
      console.log(err);
    });
  }
  loadMusics(){
    console.log("loadMusic");
    this.apiService.getUserMusic(this.auth.token).subscribe(results=>{
      console.log(results);
      this.musics = results;
    },err=>{
      alert("Une erreur est survenue");
      console.log(err);
    });
  }
}
