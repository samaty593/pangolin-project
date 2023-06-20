import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {}

  profil = {
    email : "",
    password: "",
    role: "",
    name: "",
    friendsList: [],
  }



  ngOnInit(): void {
  }

  createProfil() {
    this.http.post('https://pangolin-love-fruits.onrender.com/api', { params: {
      ['emailAddress']: this.profil.email,
      ['password']: this.profil.password,
      ['role']: this.profil.role,
      ['name']: this.profil.name,
    }}).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('profil', JSON.stringify(this.profil));
        this.router.navigate(['/profil']);

      }
    });

  }

}
