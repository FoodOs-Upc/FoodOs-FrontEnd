import { Component } from '@angular/core';
import {UserService} from "../../../FoodOS/Auth/service/user.service";
import {Profile} from "../../../FoodOS/Profile/model/profile.entity";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private userService:UserService) {
  }

  getProfile():Profile{
    return this.userService.currentProfile()

  }

}
