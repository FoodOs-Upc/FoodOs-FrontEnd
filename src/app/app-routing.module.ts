import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./Public/pages/layout/layout.component";
import {ProfileComponent} from "./Profile/pages/profile/profile.component";
import {HomeComponent} from "./Public/pages/home/home.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() =>import("./Auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:'profile',
    loadChildren:() =>import("./Profile/profile.module").then(m=>m.ProfileModule)
  },
  {
    path:'inventory',
    loadChildren:()=> import("./Inventory/inventory.module").then(m=>m.InventoryModule)

  },
  {
    path:'',
    component:LayoutComponent,
    children:[{path:'home',component: HomeComponent}]
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
