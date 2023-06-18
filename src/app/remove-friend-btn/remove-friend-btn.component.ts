import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-remove-friend-btn',
  templateUrl: './remove-friend-btn.component.html',
  styleUrls: ['./remove-friend-btn.component.css']
})
export class RemoveFriendBtnComponent {
  @Input() friendToAddOrDelete;
  @Input() friendsList: {name: string; _id: string}[]= [];
  @Input() item: { name: string,
                   role: string,
                   isFriends: boolean,
                   _id: string, 
                   email: string, 
                   password: string }
  @Output() deleteEvent = new EventEmitter<string>();

  user: string = JSON.parse(localStorage.getItem('profil')).name;
  


  constructor(private http: HttpClient) { };

  public removeFriend() {
    const friend_Id = this.friendsList.find(element => {
      return element.name === this.friendToAddOrDelete;
    });
    this.http.delete('https://pangolin-love-fruits.onrender.com/api', { params: {
       ['user']: this.user,
       ['friend_Id']: friend_Id._id,
      } })
          .subscribe(res => {
            console.log(res)
            this.deleteEvent.emit('this friend has been deleted ');
          });

  }

}
