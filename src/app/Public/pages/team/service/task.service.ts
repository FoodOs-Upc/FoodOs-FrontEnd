import { Injectable } from '@angular/core';
import {BaseService} from "../../../../Shared/services/base.service";
import {TaskEntity} from "../model/task.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseService<TaskEntity>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'task';
  }
}
