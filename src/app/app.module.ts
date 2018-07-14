import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule   } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FileDropModule } from 'ngx-file-drop';

import { AuthReducer } from './stores/auth/auth.reducer';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import {  HomePageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { LeftSideBarComponent } from './components/sidebar/left/left.component';
import { TopSideBarComponent } from './components/sidebar/top/top.component';
import { UploadComponent } from './components/upload/upload.component';

import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    RootComponent,
    HomePageComponent,
    LeftSideBarComponent,
    TopSideBarComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      auth: AuthReducer
    }),
    FileDropModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
