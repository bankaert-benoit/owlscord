import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'owlscord';
  constructor(){
    const config = {
      apiKey: 'AIzaSyB5h8qb90LKvnIWbJySL1-lEUb0-0CIg1A',
      authDomain: 'owlscord.firebaseapp.com',
      databaseURL: 'https://owlscord.firebaseio.com',
      projectId: 'owlscord',
      storageBucket: 'owlscord.appspot.com',
      messagingSenderId: '588481219775',
      appId: '1:588481219775:web:7878eb6dd24a209c9f8a0a'
    }
    firebase.initializeApp(config)
  }
}
