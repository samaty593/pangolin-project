import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilsListComponent } from './profils-list/profils-list.component';
import { LogUpComponent } from './log-up/log-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logup', component: LogUpComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'pangolinsList', component: ProfilsListComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
