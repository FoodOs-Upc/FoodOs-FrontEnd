import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {MatListItem} from "@angular/material/list";
import { FormAddProductComponent } from './components/form-add-product/form-add-product.component';
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDialogClose} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ProductsComponent,
    FormAddProductComponent
  ],
    imports: [
        CommonModule,
        InventoryRoutingModule,
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatCell,
        MatHeaderRowDef,
        MatRowDef,
        MatCellDef,
        MatHeaderCellDef,
        MatHeaderRow,
        MatRow,
        MatPaginator,
        MatIcon,
        MatListItem,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        MatOption,
        MatSelect,
        ReactiveFormsModule,
        MatIconButton,
        MatDatepickerToggle,
        MatDatepicker,
        MatDatepickerInput,
        MatDialogClose,
        MatMiniFabButton
    ]
})
export class InventoryModule { }
