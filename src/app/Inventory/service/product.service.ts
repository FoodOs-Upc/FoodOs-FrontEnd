import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseService} from "../../Shared/services/base.service";
import {Profile} from "../../Profile/model/profile.entity";
import {Inventory} from "../model/inventory.entity";
import {Observable} from "rxjs";
import {Product} from "../model/product.entity";
import {FormAddProductComponent} from "../components/form-add-product/form-add-product.component";
import {TokenStorageService} from "../../Auth/service/tokenStorageService.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/product'
  }



}
