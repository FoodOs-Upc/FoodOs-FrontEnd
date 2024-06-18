import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.entity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../service/tokenStorageService.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

  user:User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';


  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private tokenStorageService:TokenStorageService,
    private router:Router) {
    this.user = {} as User;

  }

  LoginForm:FormGroup = this.formBuilder.group({
    username: ['',{validators:[Validators.required],updateOn: `change`}],
    password: ['',{validators: [Validators.required,Validators.maxLength(8)],updateOn: `change`}]
  });

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['home']);
  }}


  onLogin():void {
    if(this.LoginForm.invalid)return;
    //hacer un post para el desploy con backend
    this.userService.login(
      this.LoginForm.controls['username'].value,
      this.LoginForm.controls['password'].value)

      .subscribe(response =>{
        this.tokenStorageService.saveToken(response.token);
        this.tokenStorageService.saveUser(response.profileId)
        this.isLoginFailed= false;
        this.isLoggedIn =true;
        /*this.userService.printData();*/
        /*
        this.router.navigate(['home']);*/
        this.reloadPage();

      })



  }

 reloadPage(){
    window.location.reload();
 }


}
