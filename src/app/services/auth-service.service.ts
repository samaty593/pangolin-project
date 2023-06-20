import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient) {}

  logIn(email, password) {
    return this.http.get<{ verified: boolean; name: string, email: string, role: string, friendsList: string[], password: string }>('https://pangolin-love-fruits.onrender.com/api', { params: {
      ['email']: email,
      ['password']: password,
    }})
  }

  loginStatus() {
    this.isLoggedIn = true;
    localStorage.setItem('STATE', 'true');
  }

}
