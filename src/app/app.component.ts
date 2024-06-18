import {Component, OnInit} from '@angular/core';
import {UserService} from "./Auth/service/user.service";
import {TokenStorageService} from "./Auth/service/tokenStorageService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FoodOs-FrontEnd';

  isLoggedIn = false;

  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) {
  }
  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();



  }
}}
