import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./Auth/auth.module";

import { CustomSidenavComponent } from './Public/components/custom-sidenav/custom-sidenav.component';
import {MatListItem, MatNavList} from "@angular/material/list";
import { LayoutComponent } from './Public/pages/layout/layout.component';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {TeamComponent} from "./Public/pages/team/team.component";
import {CommonModule, DatePipe} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ProfileComponent } from './Profile/pages/profile/profile.component';
import { HomeComponent } from './Public/pages/home/home.component';
import {InventoryModule} from "./Inventory/inventory.module";
import {authInterceptorProviders} from "./Auth/service/authInterceptor";



    @NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    MatNavList,
    MatListItem,
    MatSidenavContainer,
    MatSidenav,
    MatIcon,
    MatSidenavModule,
    CommonModule,
    TeamComponent,
    MatDatepickerModule,
    MatNativeDateModule,


  ],
  providers: [
    provideAnimationsAsync(),
    DatePipe,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
