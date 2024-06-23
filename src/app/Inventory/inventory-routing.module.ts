import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../Public/pages/layout/layout.component";
import {ProductsComponent} from "./pages/products/products.component";

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children:[
      {path:'',component: ProductsComponent},
      {path:'**',redirectTo:'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
