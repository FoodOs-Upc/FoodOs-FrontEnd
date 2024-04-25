import { Injectable } from '@angular/core';
import {BaseService} from "../../Shared/services/base.service";
import {User} from "../model/user.entity";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, retry, switchMapTo, tap} from "rxjs";
import {ProfileService} from "../../Profile/service/profile.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Profile} from "../../Profile/model/profile.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  private userLogin:User;
  private userProfile:Profile


  constructor(http:HttpClient,private profileService:ProfileService) {
    super(http);
    this.userLogin = {} as User;
    this.userProfile ={} as Profile
    this.resourceEndpoint = '/user'
  }
  login(email:string, password:string):Observable<boolean>{
    return this.http.get<User>(`${this.resourcePath()}`)
      .pipe(
        tap(response => this.userLogin = response),
        tap(response => localStorage.setItem('idProfile',String(response.id_user))),
        map(() =>true)
        )

  }


  checkStatus():Observable<boolean>{
    if (!localStorage.getItem('idProfile'))return of(false);
    const token:number =parseInt(localStorage.getItem('idProfile')?? '',10)  ;
    return this.profileService.getById(token)
      .pipe(
        tap(response =>this.userProfile=response ),
        map(userProfile => !!userProfile),
        catchError(err=>of(false))
      )

  }

  logOut(){
    this.userLogin= {} as User;
    localStorage.clear();
  }

  public printData():void{
    console.log(this.userLogin.id_user)
    console.log("//////////////////////")
    console.log(this.userProfile.id);
  }
}
