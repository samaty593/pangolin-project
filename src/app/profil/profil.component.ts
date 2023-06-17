import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profil: {name: string, role: string, friendsList: [{name: string, _id: string, role: string}]};;
  nameToDelete: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.profil = JSON.parse(localStorage.getItem('profil') as string);
  };

  public removeFriend() {
    const friend_Id = this.profil.friendsList.find(element => {
      return element.name === this.nameToDelete;
    });

    this.http.delete('https://pangolin-love-fruits.onrender.com/api', { params: {
       ['user']: this.profil.name,
       ['friend_Id']: friend_Id._id

      } })
          .subscribe(res => {
            alert('Rafraichissez la page pour voire la mise à jour');
          });
  }

}
