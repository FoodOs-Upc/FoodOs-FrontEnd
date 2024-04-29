import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../../Shared/services/base.service";
import {TeamEntity} from "../model/team.entity";

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseService<TeamEntity> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'team';
  }
}
