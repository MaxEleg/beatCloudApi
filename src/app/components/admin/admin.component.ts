import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {ApiService} from '../../services/api/api.service';
import {User, AppState, WebAuth} from '../../interfaces';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users$;
  musics$;
  plugins$;
  auth: WebAuth;

  constructor(private apiService: ApiService,  private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.select((state: AppState ) => {
      return state.auth;
    }).subscribe((auth: WebAuth) => {
      this.auth = auth;
      setTimeout(()=>{
        if(!this.auth.isAuth){
          this.router.navigateByUrl('/home');
          return;
        }
        this.loadUsers();
      }, 1000);
    });
  }

  loadUsers(){
    this.users$ = this.apiService.sendRequest('/admin/users', 'get', this.auth.token);
  }
  loadMusics(){
    this.apiService.sendRequest('/admin/sounds', 'get', this.auth.token).subscribe(results=>{
      this.musics$ = results;
    },err=>{
      alert("Une erreur est survenue");
      console.log(err);
    });
  }
  loadPlugins(){
    this.apiService.sendRequest('/publics/plugins', 'get', this.auth.token).subscribe(results=>{
      this.plugins$ = results;
    },err=>{
      alert("Une erreur est survenue");
      console.log(err);
    });
  }

  banUser(user){
    this.apiService.sendPost('/admin/user/ban', {
      token: this.auth.token,
      userId: user.id,
    }).subscribe((result)=>{
      this.loadUsers();
    },((err)=>console.log(err)));
  }
  removeSound(user){
    this.apiService.sendPost('/admin/user/ban', {
      token: this.auth.token,
      userId: user.id,
    }).subscribe((result)=>{
      this.loadUsers();
    },((err)=>console.log(err)));
  }
}
