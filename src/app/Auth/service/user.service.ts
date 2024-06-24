import { Injectable } from '@angular/core';
import {BaseService} from "../../Shared/services/base.service";
import {User} from "../model/user.entity";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, retry, switchMapTo, tap} from "rxjs";
import {ProfileService} from "../../Profile/service/profile.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Profile} from "../../Profile/model/profile.entity";
import {resolve} from "@angular/compiler-cli";
import {LoginUser} from "../model/loginUser.entity";
import {RegisterUser} from "../model/registerUser.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(http:HttpClient,private profileService:ProfileService) {
    super(http);

    this.resourceEndpoint = '/authentication'
  }
  login(email:string, password:string):Observable<any>{

    const loginUser: LoginUser = new LoginUser(email,password);

    return this.http.post<User>(`${this.resourcePath()}/sign-in`,loginUser,this.httpOptions)


  }

  signUp(user:FormData):Observable<any>{
    console.log(user);
    return this.http.post<any>(`${this.resourcePath()}/sign-up`,user,this.httpOptions)

  }

}
