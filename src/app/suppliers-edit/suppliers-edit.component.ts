import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styleUrl: './suppliers-edit.component.css'
})
export class SuppliersEditComponent {
  suppliersForm: FormGroup;
cook:string[] = [
  'Add export',
  'Add task to cheff ',
]
  constructor(private  _fb:FormBuilder) {
  this.suppliersForm = this._fb.group()
  }
}
