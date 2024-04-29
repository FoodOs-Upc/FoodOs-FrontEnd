import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./Public/pages/layout/layout.component";
import {InventoryPageComponent} from "./FoodOS/Inventory/pages/inventory-page/inventory-page.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() =>import("./FoodOS/Auth/auth.module").then(m=>m.AuthModule)
  },

  {
    path:'inventory',
    component: InventoryPageComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
