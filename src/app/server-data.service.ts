import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  friendsList: {name: string; _id: string}[]= [];
  user: string;
  constructor(private http: HttpClient) { }

  public getAll() {
    this.user = JSON.parse(localStorage.getItem('profil')).name;
    this.friendsList = JSON.parse(localStorage.getItem('profil')).friendsList;

    return this.http.get<{ allPangolin: [] }>('https://pangolin-love-fruits.onrender.com/api/listAll');
};

public    getUpdatedFriendsList() {
  return this.http.get('https://pangolin-love-fruits.onrender.com/api', { params: {
    ['email']: JSON.parse(localStorage.getItem('profil')).email,
    ['password']: JSON.parse(localStorage.getItem('profil')).password,
  }})
}


public addFriend(user, id) {
  return this.http.put('https://pangolin-love-fruits.onrender.com/api', { params: {
    ['user']: user,
    ['friend_Id']: id,
  }})
}

}