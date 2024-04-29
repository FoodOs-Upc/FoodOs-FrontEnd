import { Injectable } from '@angular/core';
import {BaseService} from "../../../Shared/services/base.service";
import {Profile} from "../model/profile.entity";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile>{


  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/profile'
  }

}
