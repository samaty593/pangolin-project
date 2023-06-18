import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogUpComponent } from './log-up/log-up.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { ProfilsListComponent } from './profils-list/profils-list.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RemoveFriendBtnComponent } from './remove-friend-btn/remove-friend-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogUpComponent,
    ProfilComponent,
    ProfilsListComponent,
    LogOutComponent,
    RemoveFriendBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
