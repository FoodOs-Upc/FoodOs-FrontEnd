import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../Shared/services/base.service";
import {Profile} from "../../Profile/model/profile.entity";
import {Inventory} from "../model/inventory.entity";

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends BaseService<Inventory>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/inventory'
  }
}
