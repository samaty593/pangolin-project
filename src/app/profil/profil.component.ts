import { Component, OnInit } from '@angular/core';
import { ServerDataService } from '../server-data.service';


interface Profils { name: string,
  role: string,
  isFriends: boolean,
  _id: string, 
  email: string, 
  password: string,
  friendsList: string[]
};

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profil;
  nameToDelete: string;
  profils:  Profils[];
  friendsList;

  constructor(private serverData: ServerDataService) { };

  ngOnInit(): void {
     this.profil = JSON.parse(localStorage.getItem('profil'));
     this.friendsList = JSON.parse(localStorage.getItem('profil')).friendsList;

  };

  private updateFriendStatus() {
    this.friendsList = JSON.parse(localStorage.getItem('profil')).friendsList;
    this.profil = JSON.parse(localStorage.getItem('profil'));

    this.profils.forEach((element, i) => {
      const name = element.name;
      this.friendsList.forEach((element: { name: string }) => {
        const friend = element.name;
        if (friend == name) {
          this.profils[i].isFriends= true;
       }
      })
    })
  }

  public    getUpdatedFriendsList() {
    this.serverData.getUpdatedFriendsList()
      .subscribe({
        next: (res: Profils) => {
            const profil = {
              name:res.name,
              role: res.role,
              friendsList: res.friendsList,
              email: res.email,
              password: res.password,
            };
          localStorage.setItem('profil', JSON.stringify(profil));
          this.serverData.getAll().subscribe(res => {
            this.profils = res.allPangolin;
            this.updateFriendStatus();
        });
        }
      }) 
  }

}
