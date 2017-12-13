import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  users : Array<User>; //mock (fausses données  pour test)

  constructor() { 
    this.users = new Array<User>();
    this.users.push({id : 1, name : 'name1', firstName : 'fn1', login : 'log1', mail : 'mail1', password : 'azer1'}); //test
    this.users.push({id : 2, name : 'name2', firstName : 'fn2', login : 'log2', mail : 'mail2', password : 'azer2'}); //test


  }


  getAll(): User[] {
    return this.users;
  }

  get(id: number): User {
    return null;
  }

  create(user : User): void { }

  delete(): void { }

  update(user: User): void { }



}
