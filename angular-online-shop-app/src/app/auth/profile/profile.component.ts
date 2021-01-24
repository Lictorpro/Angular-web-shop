import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  ngOnInit(){
    this.profileForInput = {
      id: this.data.user.id,
      firstName: this.data.user.firstName,
      lastName: this.data.user.lastName,
      email: this.data.user.email,
      password: this.data.user.password,
      birthDate: this.data.user.birthDate,
      mobileNumber: this.data.user.mobileNumber,
      address: this.data.user.address,
      favouriteProducts: this.data.user.favouriteProducts


    };
  }

  finishEditing(form: NgForm){
      this.data.user.firstName = this.profileForInput.firstName;
      this.data.user.lastName = this.profileForInput.lastName;
      this.data.user.email = this.profileForInput.email;
      this.data.user.password = this.profileForInput.password;
      this.data.user.birthDate = this.profileForInput.birthDate;
      this.data.user.mobileNumber = this.profileForInput.mobileNumber;
      this.data.user.address = this.profileForInput.address;
      this.data.user.favouriteProducts = this.profileForInput.favouriteProducts;

      console.log(this.data.user);
      console.log(UserService.dummyUserList);
      this.isEditing = false;
  }

}
