import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from './user.model';
import { Server } from 'src/app/server/server.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private separator: string = ";";

  constructor() { }

  sendUserInfo(user: User){
    firebase.firestore().collection('users').add({
      email: user.email,
      pseudo: user.pseudo,
      friendList: this.friendListToString(user.friendList),
      serverList: this.serverListToString(user.serverList),
      birthDate: user.birthDate,
      firstName: user.firstName,
      lastName : user.lastName
    });
  }

  updateUserInfo(user: User){
    
  }

  getUserInfo(email: string):string{
    return "";
  }

  isNameAvailable(name: string):boolean{
    return false;
  }

  serverListToString(servers: Server[]):string{
    var server: string = "";
    for(var i = 0; i < servers.length ; i++){
      server += servers[i].name+this.separator;
    }
    server = server.substring(0,server.length-1);
    return server;
  }

  friendListToString(friends : User[]):string{
    var friend: string = "";
    for(var i = 0; i < friends.length ; i++){
      friend += friends[i].pseudo+this.separator;
    }
    friend = friend.substring(0,friend.length-1);
    return friend;
  }

  friendListToStringArray(friends: User[]):string[]{
    var idx : number = friends.length;
    var res : string[] = [];
    res.length = idx;
    for(var i = 0; i < idx; i++){
      res[i] = friends[i].pseudo;
    }
    return res;
  }
}
