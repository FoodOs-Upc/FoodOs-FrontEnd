import {Component, OnInit} from '@angular/core';
import {UserService} from "./Auth/service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FoodOs-FrontEnd';
  constructor(private userService:UserService) {
  }
  ngOnInit(){
    this.userService.checkStatus()
      .subscribe(()=>{
        console.log("Chequeando Usuario")
      })
  }
}
