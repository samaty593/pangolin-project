import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profils-list',
  templateUrl: './profils-list.component.html',
  styleUrls: ['./profils-list.component.css']
})
export class ProfilsListComponent implements OnInit {
  friendsList: {name: string; _id: string}[]= [];
  user: string;
  friendToAddOrDel;
  profils: { name: string,
             role: string,
             isFriends: boolean,
             _id: string, 
             email: string, 
             password: string }[];
  
  constructor(private http: HttpClient) { };


  ngOnInit(): void {
    this.getAll();
    }
    
    private updateFriendStatus() {
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
   
    private getAll() {
        this.user = JSON.parse(localStorage.getItem('profil')).name;
        this.friendsList = JSON.parse(localStorage.getItem('profil')).friendsList;

        this.http.get<{ allPangolin: [] }>('https://pangolin-love-fruits.onrender.com/api/listAll').subscribe(res => {
          this.profils = res.allPangolin;
          this.updateFriendStatus();
      })
    }
  
    private    getUpdatedFriendsList() {
      this.http.get<{ verified: boolean; name: string, role: string, email: string, password: string, friendsList: string[] }>('https://pangolin-love-fruits.onrender.com/api', { params: {
        ['email']: JSON.parse(localStorage.getItem('profil')).email,
        ['password']: JSON.parse(localStorage.getItem('profil')).password,
      }}).subscribe({
        next: (res) => {
            const profil = {
              name:res.name,
              role: res.role,
              friendsList: res.friendsList,
              email: res.email,
              password: res.password,
            };
          localStorage.setItem('profil', JSON.stringify(profil));
          this.getAll();


        }
      }) 
    }
  
  public addFriend() {
    const friend_Id = this.profils.find(element => {
      return element.name === this.friendToAddOrDel;
    });

    this.http.put('https://pangolin-love-fruits.onrender.com/api', { params: {
      ['user']: this.user,
      ['friend_Id']: friend_Id._id,
    }})
      .subscribe(() => {
        this.getUpdatedFriendsList();
      })

  };

  // public removeFriend() {
  //   const friend_Id = this.friendsList.find(element => {
  //     return element.name === this.friendToAddOrDel;
  //   });

  //   this.http.delete('https://pangolin-love-fruits.onrender.com/api', { params: {
  //      ['user']: this.user,
  //      ['friend_Id']: friend_Id._id,
  //     } })
  //         .subscribe(res => {
  //           this.getUpdatedFriendsList();
  //         });

  // }
}
