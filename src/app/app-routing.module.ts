import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./Public/pages/layout/layout.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() =>import("./Auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:'home',
    component:LayoutComponent,

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
