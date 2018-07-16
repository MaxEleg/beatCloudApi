import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { User } from '../../interfaces';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}


  createAccount(newUser: User) {
    let urlRegister;
    urlRegister = environment.app_url + '/account/register';
    return this.http.post(urlRegister, newUser);
  }

  auth(data) {
    let urlLogin;
    urlLogin = environment.app_url + '/account/auth';
    return this.http.post(urlLogin, data);
  }

  logout(token) {
    let urlLogin;
    urlLogin = environment.app_url + '/account/logout?token=' + token;
    return this.http.get(urlLogin);
  }
  getUserSound(token) {
    let urlSounds;
    urlSounds = environment.app_url + '/sounds/user?token=' + token;
    return this.http.get(urlSounds);
  }

}
