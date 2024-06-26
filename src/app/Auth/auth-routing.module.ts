import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./pages/layout/layout.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {TeamComponent} from "../Public/pages/team/team.component";

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children:[
      {path:'login',component: LoginComponent},
      {path:'signUp',component:RegisterComponent},
      {path:'group',component:TeamComponent},
      {path:'**',redirectTo:'login'}
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
