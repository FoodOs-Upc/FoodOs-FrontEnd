import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./pages/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
        MatOption,
        MatSelect

    ]
})
export class AuthModule { }
