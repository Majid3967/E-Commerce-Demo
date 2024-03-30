import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  userExists(user:User){
    let data = localStorage.getItem("users");
    let result = false;
    if(data){
      let users : User[] = JSON.parse(data);
      let index = users.findIndex(x => x.email == user.email && x.password == user.password);
      if(index != -1){
        result = true;
      }
    }
    return result;
  }

  addUser(user:User){
    let data = localStorage.getItem("users");
    let users : User[] = [];
    if(data){
      users = JSON.parse(data);
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("user",JSON.stringify(user));
  }
  setUser(user:User){
    localStorage.setItem("user",JSON.stringify(user));
  }
  getUser() : User{
    const data = localStorage.getItem("user");
    let result = null;
    if(data){
      result = JSON.parse(data);
    }
    return result;
  }
  logout(){
    localStorage.removeItem("user");
  }
}
