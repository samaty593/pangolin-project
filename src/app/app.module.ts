import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogUpComponent } from './components/log-up/log-up.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './components/profil/profil.component';
import { ProfilsListComponent } from './components/profils-list/profils-list.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { RemoveFriendBtnComponent } from './components/remove-friend-btn/remove-friend-btn.component';

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
