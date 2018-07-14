import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule   } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AuthReducer } from './stores/auth/auth.reducer';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import {  } from './components/root/root.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { LeftSideBarComponent } from './components/sidebar/left/left.component';
import { TopSideBarComponent } from './components/sidebar/top/top.component';

import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    RootComponent,
    LeftSideBarComponent,
    TopSideBarComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      auth: AuthReducer
    })
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
