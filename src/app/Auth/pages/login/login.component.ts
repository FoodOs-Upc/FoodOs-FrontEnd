import {Component} from '@angular/core';
import {User} from "../../model/user.entity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  user:User;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) {
    this.user = {} as User;

  }

  LoginForm:FormGroup = this.formBuilder.group({
    email: ['',{validators:[Validators.required,Validators.email],updateOn: `change`}],
    password: ['',{validators: [Validators.required,Validators.maxLength(8)],updateOn: `change`}]
  });

  onLogin():void {
    if(this.LoginForm.invalid)return;
    //hacer un post para el desploy con backend
    this.userService.login(
      this.LoginForm.controls['email'].value,
      this.LoginForm.controls['password'].value)

      .subscribe(response =>{
        console.log("Inicio correcto");
        /*this.userService.printData();*/
        this.router.navigate(['home']);

      })



  }

  //Funcion momentanea para el login


}
