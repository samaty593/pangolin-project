import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  email: string = "";
  password: string = ""

  ngOnInit(): void {
  }

   verifyProfil() {
 
    
    this.http.get('http://localhost:8080/api').subscribe(res => console.log(res))
  }

}
