import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {}

  email: string = "";
  password: string = ""

  ngOnInit(): void {
  }

   verifyProfil() {
    this.http.get<{ verified: boolean; name: string }>('http://localhost:8080/api', { params: {
      ['email']: this.email,
      ['password']: this.password,
    }}).subscribe({
      next: (res) => {
        if(res.verified == true)
        localStorage.setItem('userName', res.name);
        this.router.navigate(['/profil']);
      }
    }
        ) 
  }

}


 