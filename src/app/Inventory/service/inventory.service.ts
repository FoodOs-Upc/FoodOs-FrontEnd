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
export class InventoryService extends BaseService<Inventory>{

  constructor(http:HttpClient,private tokenStorageService:TokenStorageService) {
    super(http);
    this.resourceEndpoint = '/inventory'
  }


  addProduct(product:any,idInventory:number):Observable<any>{

    for (let pair of product.entries()) {
      console.log(pair[0] + ', ' + pair[1]); // Muestra cada clave/valor
    }
    return this.http.post(`${this.resourcePath()}/${idInventory}/product`,product )
  }
}
