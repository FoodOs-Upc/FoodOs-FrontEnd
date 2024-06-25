import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.entity";
import {Router} from "@angular/router";
import {RegisterUser} from "../../model/registerUser.entity";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  private user= {} as RegisterUser;
  formData:FormData = new FormData();

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.registerForm= this.formBuilder.group({
      email: ['',{validators:[Validators.required,Validators.email],updateOn: `change`}],
      password: ['',{validators: [Validators.required,Validators.maxLength(8)],updateOn: `change`}],
      name:[''],
      lastName:[''],
      confirmPassword:['',{validators:[Validators.required]}],
      username:['',{validators:[Validators.required]}],
      rol: ['',{validators:[Validators.required]}]
    })
  }

  onRegister():void{
    if(this.registerForm.invalid)return;
    /*
   this.user.username = this.registerForm.controls['username'].value;
    this.user.password = this.registerForm.controls['password'].value;
    this.user.role = this.registerForm.controls['rol'].value;
    this.user.firstName=this.registerForm.controls['name'].value;
    this.user.LastName = this.registerForm.controls['lastName'].value;
    /*Poner Imagen*//*
    this.user.emailAddress = this.registerForm.controls['email'].value;
    */

    this.formData.append('username', this.registerForm.controls['username'].value);
    this.formData.append('password', this.registerForm.controls['password'].value);
    this.formData.append('role', this.registerForm.controls['rol'].value);
    this.formData.append('firstName', this.registerForm.controls['name'].value);
    this.formData.append('LastName', this.registerForm.controls['lastName'].value);
    this.formData.append('emailAddress', this.registerForm.controls['email'].value);

    this.userService.signUp(this.formData)
      .subscribe(response =>{
        this.router.navigate(['auth/login'])
      })

  }

  ChapterFile(event:any){
    const  file = event.target.files[0];
    if(file){
      //Añadir a form data
      this.formData.append('imageProfile',file)
      //this.user.imageProfile =file;
      console.log("Captura Image")
      console.log(file)

    }
  }
}
