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
import { ProfileComponent } from './Profile/pages/profile/profile.component';
import { HomeComponent } from './Public/pages/home/home.component';


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
        MatSidenavModule


    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
