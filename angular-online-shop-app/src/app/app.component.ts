import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-online-shop-app';
  profileOpened: boolean = false;

  constructor(public userService: UserService, private dialog: MatDialog){}

  openProfile(userId: number){
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: {user: this.userService.getUserById(userId)}

    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }
}
