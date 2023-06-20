import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router, private auth: AuthServiceService) {}

  email: string = "";
  password: string = ""

  ngOnInit(): void {
  }

   verifyProfil() {
    this.auth.logIn(this.email, this.password).subscribe({
      next: (res) => {
        if(res.verified == true) {
          const profil = {
            name:res.name,
            role: res.role,
            friendsList: res.friendsList,
            email: res.email,
            password: res.password
          };
        localStorage.setItem('profil', JSON.stringify(profil));
        this.auth.loginStatus();
        this.router.navigate(['/profil']);
        }
      }
    }
        ) 
  }

}


 