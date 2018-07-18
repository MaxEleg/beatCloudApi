import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { User, AppState,WebAuth } from '../../interfaces';
import { Store } from '@ngrx/store';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}


  createAccount(newUser: User) {
    let urlRegister;
    urlRegister = environment.app_url + '/account/register';
    return this.http.post(urlRegister, newUser);
  }

  editAccount(token, user: User) {
    let urlEdit;
    console.log(user);
    urlEdit = environment.app_url + '/account/edit?token=' + token;
    return this.http.post(urlEdit, user);
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

  sendRequest(url, method) {
    let urlSounds;
    urlSounds = environment.app_url + url;
    return this.http[method](urlSounds);
  }

  sendForm(token, formData) {
    const headers = new HttpHeaders({
      'token': token
    });
    return this.http.post(environment.app_url + '/sound/upload',
      formData, { headers: headers });
  }

}
