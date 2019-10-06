import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { TouchSequence } from 'selenium-webdriver';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;
  private user1: User;
  private user2: User;
  private friends: string[];
  private friendList: User[];

  constructor(private userServcie: UserService) {
    
   }

  ngOnInit() {
    this.user1 = new User("bankaert.benoit@gmail.com","MrKeesLer","Benoit","Bankaert");
    this.user2 = new User("geoffrey@gmail.com","Captain Geojo","Geoffrey","Vaniscotte");
    this.user = this.user1;
    this.friendList = [this.user1,this.user2];
    this.friends = this.userServcie.friendListToStringArray(this.friendList);
  }

  changeToCurrentUser(){
    this.user = this.user1;
  }

  changeUserInfo(){
    if(this.user == this.user2){
      this.user = this.user1;
    }else {
      this.user = this.user2;
    }
  }
}
