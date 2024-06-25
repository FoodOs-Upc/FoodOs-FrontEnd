import {Component, OnInit} from '@angular/core';
import {InventoryService} from "../../../Inventory/service/inventory.service";
import {Product} from "../../../Inventory/model/product.entity";
import {Provider} from "../../../Inventory/model/provider.entity";
import {ProviderService} from "../../../Inventory/service/provider.service";
import {TokenStorageService} from "../../../Auth/service/tokenStorageService.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  reports:number[];
  products:Product[];
  provider:number[];
  date: Date;

  constructor(private inventoryService: InventoryService, private providerService: ProviderService,private tokenStorageService:TokenStorageService) {
    this.reports=[];
    this.products=[];
    this.provider=[];
    this.date = new Date();
  }
  private getAllInventorie():void{
    this.inventoryService.getById(Number(this.tokenStorageService.getUser())).subscribe(response =>{
      console.log('fecha actual');
      console.log(this.date)
      console.log(response.products)
      response.products.map(m=>{

        if(this.compareDate(m.expirationDate)){
          console.log('Fecha de expiracion del producto');
          console.log(m.expirationDate);
          console.log(this.date.toISOString())
          this.products.push(m);
        }
        //this.products.push(m);
      })
    })

  }
  transformDate(date:string){
    let newDate = new Date(date);
    return `${newDate.getFullYear()}/${newDate.getMonth()}/${newDate.getDate()}`;
  }

  compareDate(date:string):boolean{
    let newDate = new Date(date);
    console.log("Fecha transformada")
    console.log(newDate);
    if(newDate<this.date){
      return false;
    }else if(newDate>=this.date){
      return true;
    }else{
      return true
    }


  }

  ngOnInit(): void {
    console.log(this.date);
    this.getAllInventorie();
    console.log('Productos')
    console.log(this.products)
    for (let i = 0; i < 10; i++) {
      this.reports.push(2);
      this.provider.push(3);
    }



  }

}
