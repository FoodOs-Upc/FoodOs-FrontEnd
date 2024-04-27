import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private user= {} as User;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) {
  }
  registerForm:FormGroup = this.formBuilder.group({
    email: ['',{validators:[Validators.required,Validators.email],updateOn: `change`}],
    password: ['',{validators: [Validators.required,Validators.maxLength(8)],updateOn: `change`}],
    name:[''],
    lastName:[''],
    confirmPassword:['',{validators:[Validators.required]}],
    Company:['',{validators:[Validators.required]}],
    birthday:['',{validators:[Validators.required]}],
    country:[''],
    city:[''],
    rol: ['',{validators:[Validators.required]}]
  })
  onRegister():void{
    if(this.registerForm.invalid)return;
    this.user.email= this.registerForm.controls['email'].value
    this.user.password = this.registerForm.controls['password'].value


    this.userService.signUp(this.user)
      .subscribe(response =>{
        this.router.navigate(['auth/login'])
      })

  }
}
