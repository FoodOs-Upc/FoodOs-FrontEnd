import { Injectable } from '@angular/core';
import {BaseService} from "../../Shared/services/base.service";
import {User} from "../model/user.entity";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, retry, switchMapTo, tap} from "rxjs";
import {ProfileService} from "../../Profile/service/profile.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Profile} from "../../Profile/model/profile.entity";
import {resolve} from "@angular/compiler-cli";

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
  //Cambiar el la posicion del arreglo para cambiar de tipo de usuario
  login(email:string, password:string):Observable<boolean>{
    return this.http.get<User[]>(`${this.resourcePath()}`)
      .pipe(
        tap(response => this.userLogin = response[0]),
        tap(response => localStorage.setItem('token',response[0].id_user)),
        tap(response => console.log(this.userLogin)),
        map(() =>true)
        )

  }

  signUp(user:User):Observable<User>{
    return this.http.post<User>(`${this.resourcePath()}`,user)
      .pipe(
        tap(response=>this.userLogin = response),

      )
  }


  checkStatus():Observable<boolean>{
    if (!localStorage.getItem('token'))return of(false);
    const token:string = localStorage.getItem('token')?? ''  ;
    return this.profileService.getById(Number(token))
      .pipe(
        tap(response =>this.userProfile=response ),
        tap(response => console.log(this.userProfile)),
        map(userProfile => !!userProfile),
        catchError(err=>of(false))
      )

  }

  logOut(){
    this.userLogin= {} as User;
    localStorage.clear();
  }

  public printData():void{
    console.log(this.userLogin)
    console.log("//////////////////////")
    console.log(this.userProfile);
  }

  public currentProfile():Profile{
    return this.userProfile;

  }
}
