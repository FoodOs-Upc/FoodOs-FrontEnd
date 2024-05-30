import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../Shared/services/base.service";
import {Inventory} from "../model/inventory.entity";
import {Provider} from "../model/provider.entity";

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends BaseService<Provider>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/provider'
  }
}


