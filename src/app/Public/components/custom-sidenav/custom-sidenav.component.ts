import {Component, signal} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../Auth/service/user.service";
import {User} from "../../../Auth/model/user.entity";
import {Profile} from "../../../Profile/model/profile.entity";

export type MenuItemRestaurant ={
  icon:string,
  label:string,
  route:string
}
@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
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
      icon: "inventory_2",
      label: "Inventory",
      route: "notification"
    },
    {
      icon: "diversity_3",
      label: "Group",
      route: "group"
    },
    {
      icon: "notifications",
      label: "Notifications",
      route: "notifications"
    },
    {
      icon: "exit_to_app" ,
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
