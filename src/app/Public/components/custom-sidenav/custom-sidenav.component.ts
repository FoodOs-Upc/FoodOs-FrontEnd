import { Component, signal } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../../FoodOS/Auth/service/user.service";
import { User } from "../../../FoodOS/Auth/model/user.entity";
import { Profile } from "../../../FoodOS/Profile/model/profile.entity";

export type MenuItemRestaurant ={
  icon:string,
  label:string,
  route:string
}
@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent {
  constructor(private router:Router,
              private userService:UserService) {
  }
  menuItems = signal<MenuItemRestaurant[]>([
    { icon:"home",
      label:"Home",
      route:"home"
    },
    {
      icon: "inventory",
      label: "Inventory",
      route: "inventory"
    },
    {
      icon: "group",
      label: "Group",
      route: "group"
    },
    {
      icon: "notification",
      label: "Notifications",
      route: "notifications"
    },
    {
      icon: "exit" ,
      label: "Exit",
      route:"login"
    }

  ]);

  changeRouter(route:string):void{
    if(route =="login" ){
      this.userService.logOut();
      this.router.navigate([`auth/${route}`]);
    } else {
      this.router.navigate([`${route}`])
    }
  }

  getProfile():Profile{
    return this.userService.currentProfile();
  }

}
