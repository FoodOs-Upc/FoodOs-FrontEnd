import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SuppliersEditComponent} from "./suppliers-edit/suppliers-edit.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suppliers';
  constructor(private _dialog: MatDialog) { }
  openAddEditDialog() {
    this._dialog.open(SuppliersEditComponent);
  }
}
