import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profils-list',
  templateUrl: './profils-list.component.html',
  styleUrls: ['./profils-list.component.css']
})
export class ProfilsListComponent implements OnInit {
  constructor(private http: HttpClient) { }

  profils: { name: string; role: string }[];;

  ngOnInit(): void {
    this.http.get<{ allPangolin: [] }>('http://localhost:8080/api/listAll').subscribe(res => {
      this.profils = res.allPangolin;
    })
  }

}
