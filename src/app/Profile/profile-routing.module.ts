import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../Public/pages/layout/layout.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:':name',component:ProfileComponent},
      {path:`**`,redirectTo:':name'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
