import { Component, OnInit } from '@angular/core';
import { ServerDataService } from '../../services/server-data.service';

interface Profils { name: string,
  role: string,
  isFriends: boolean,
  _id: string, 
  email: string, 
  password: string,
  friendsList: string[]
};



@Component({
  selector: 'app-profils-list',
  templateUrl: './profils-list.component.html',
  styleUrls: ['./profils-list.component.css']
})
export class ProfilsListComponent implements OnInit {
  friendsList: {name: string; _id: string}[]= [];
  user: string;
  friendToAddOrDel;
  profils:  Profils[];
  
  constructor(private serverData: ServerDataService) { };


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('profil')).name;
    this.friendsList = JSON.parse(localStorage.getItem('profil')).friendsList;
    this.serverData.getAll().subscribe(res => {
      this.profils = res.allPangolin;
      this.updateFriendStatus();
  })
    }
    
    private updateFriendStatus() {
      this.friendsList = JSON.parse(localStorage.getItem('profil')).friendsList;

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
  
  
    public getUpdatedFriendsList() {
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
  
  public addFriend() {
    const friend_Id = this.profils.find(element => {
      return element.name === this.friendToAddOrDel;
    });
    
    this.serverData.addFriend(this.user, friend_Id._id)
      .subscribe(() => {
        this.getUpdatedFriendsList();
      })

  };


}
