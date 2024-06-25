import {Component, OnInit, signal} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../Auth/service/user.service";
import {User} from "../../../Auth/model/user.entity";
import {Profile} from "../../../Profile/model/profile.entity";
import {TokenStorageService} from "../../../Auth/service/tokenStorageService.service";
import {ProfileService} from "../../../Profile/service/profile.service";

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
export class CustomSidenavComponent implements OnInit{
  profile:Profile;

  constructor(private router:Router,
              private tokenStorageService:TokenStorageService,
              private profileService:ProfileService) {
    this.profile = {} as Profile;
  }
  menuItems = signal<MenuItemRestaurant[]>([
    { icon:"home",
      label:"Home",
      route:"home"
    },
    {
      icon: "inventory_2",
      label: "Inventory",
      route: "inventory"
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
    if(route =="login" ){/*
      this.userService.logOut();*/
      this.tokenStorageService.signOut();

      this.router.navigate([`auth/${route}`]);
    } else {
      this.router.navigate([`${route}`])
    }
  }

  ngOnInit() {
    this.profileService.getById(Number(this.tokenStorageService.getUser())).subscribe(response=>{
      this.profile=response;
    })
  }

  /*
    getProfile():Profile{
      return this.userService.currentProfile();
    }*/

  changeToProfile():void{
    this.router.navigate([`profile/:name`])
  }

}
