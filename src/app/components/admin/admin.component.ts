import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
  users: any = [];
  musics: any = [];
  plugins: any = [];
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
        this.loadMusics();
        this.loadPlugins();
      }, 1000);
    });
  }

  loadUsers(){
    this.apiService.sendRequest('/admin/users', 'get', this.auth.token).subscribe(results=>{
      this.users.splice(0, this.users.length -1);
      for (let user of results) {
        console.log(user);
        this.users.push(user);
      }
    },err=>{
      alert("Une erreur est survenue");
      console.log(err);
    });
  }
  loadMusics(){
    this.apiService.sendRequest('/admin/sounds', 'get', this.auth.token).subscribe(results=>{
      this.users = results;
    },err=>{
      alert("Une erreur est survenue");
      console.log(err);
    });
  }
  loadPlugins(){
    this.apiService.sendRequest('/publics/plugins', 'get', this.auth.token).subscribe(results=>{
      this.users = results;
    },err=>{
      alert("Une erreur est survenue");
      console.log(err);
    });
  }
}
