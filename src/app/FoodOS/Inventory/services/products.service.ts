import { Injectable } from '@angular/core';
import { Product } from '../model/product.entity';
import {HttpClient} from '@angular/common/http';
import { BaseService} from "../../../Shared/services/base.service";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {
  private apiUrl = '';

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/products';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
