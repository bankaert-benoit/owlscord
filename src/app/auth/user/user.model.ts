import { Server } from 'src/app/server/server.model';

export class User {
    email: string = "";
    pseudo: string = "";
    friendList: User[];
    serverList: Server[];
    firstName: string = "";
    lastName: string = "";
    birthDate: Date;

    constructor(email: string,pseudo: string,firstName: string, lastName: string){
        this.email = email;
        this.pseudo = pseudo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.friendList = null;
        this.serverList = null;
        this.birthDate = null;
    }

    getPseudo():string{
        return this.pseudo;
    }
}