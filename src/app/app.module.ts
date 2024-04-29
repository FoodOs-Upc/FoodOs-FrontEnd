import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from "@angular/common/http";

import { AuthModule } from "./FoodOS/Auth/auth.module";
import { CustomSidenavComponent } from './Public/components/custom-sidenav/custom-sidenav.component';
import {MatListItem, MatNavList} from "@angular/material/list";
import { LayoutComponent } from './Public/pages/layout/layout.component';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";
import { MatIcon } from "@angular/material/icon";
import { InventoryPageComponent } from './FoodOS/Inventory/pages/inventory-page/inventory-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardImage} from "@angular/material/card";
import {MatLine} from "@angular/material/core";
import {ProductTableComponent} from "./FoodOS/Inventory/components/product-table/product-table.component";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { TeamComponent} from "./FoodOS/Team/components/pages/team.component";

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef,
  MatTable
} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    LayoutComponent,
    InventoryPageComponent,
    ProductTableComponent,
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
    MatToolbarModule,
    MatCardImage,
    MatLine,
    MatFormField,
    MatInput,
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatIconButton,
    NgOptimizedImage,
    MatSort,
    MatButton,
    MatHeaderRowDef,
    MatHeaderRow,
    MatPaginator,
    TeamComponent

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
