import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  mobileNumber: string;
  address: string;
  favouriteProducts: string;
}


@Injectable()
export class UserService {
  
  currentUser: User = UserService.dummyUserList[0];
  static dummyUserList: Array<User> = [
    {
      id: 1,
      firstName: "Marko",
      lastName: "Markovic",
      email: "marko@test.com",
      password: "marko123",
      birthDate: new Date("2018-04-21"),
      mobileNumber: "066123456",
      address: "Nikola Tesla 2, Beograd",
      favouriteProducts: "laptop headphones"
    },

    {
      id: 2,
      firstName: "Nikola",
      lastName: "Nikolic",
      email: "nikola@test.com",
      password: "nikola123",
      birthDate: new Date("2010-04-21"),
      mobileNumber: "063333333",
      address: "Jovan Jovanovic Zmaj 14, Nis",
      favouriteProducts: "mouse usb"
    }
  ];

  getUserName(user : User) : string{
    return user.email;
  }

  getUserById(id : number) : User{
    var foundUser: User;
    UserService.dummyUserList.forEach(user =>{
      if (user.id == id){
        foundUser = user;
      }
    });

    this.currentUser = foundUser;
    return foundUser;
  }

  getUser(userEmail : string) : User{
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail);
    return this.currentUser;
  }

  isPasswordCorrect(userEmail: string, password: string) : boolean{
    return UserService.dummyUserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }

  registerUser(firstName: string, lastName: string, email: string, password: string, birthDate : Date, mobileNumber : string, address : string, favouriteProducts : string) : User{
    var maxId : number = 0;
    UserService.dummyUserList.forEach(user =>{
      if(maxId < user.id){
        maxId = user.id;
      }
    });

    var id = ++maxId;
    var user : User = {id, firstName, lastName, email, password, birthDate, mobileNumber, address, favouriteProducts}; 
    UserService.dummyUserList.push(user);

    this.currentUser = user;
    console.log(user);
    return user;
  }
}