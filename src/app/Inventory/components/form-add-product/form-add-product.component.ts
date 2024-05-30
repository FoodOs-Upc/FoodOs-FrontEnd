import {Component, EventEmitter, Inject, Input, input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product.entity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProviderService} from "../../service/provider.service";
import {Provider} from "../../model/provider.entity";

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrl: './form-add-product.component.css'
})
export class FormAddProductComponent implements OnInit{
  //Attributes
  product: Product;
  providers: Provider[];
  editMode: boolean = false;
  imagePreview: string | ArrayBuffer = '';

  productForm: FormGroup;

   constructor(private formBuilder: FormBuilder,
               private providerService: ProviderService,
               public dialogRef: MatDialogRef<FormAddProductComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any)  {

     this.product = data.product;

     this.editMode=data.mode;



      this.providers = [];

     this.productForm = this.formBuilder.group({
       id: [{value: '', disabled: true}, Validators.required],
       name: ['', Validators.required],
       expirationDate: ['', Validators.required],
       productionDate: ['', Validators.required],
       state: ['', Validators.required],
       provider: ['', Validators.required],
     });

     this.initializeForm();

     console.log("Product in form")
     console.log(this.product);
     console.log(this.editMode)
   }
   private initializeForm(): void {
     this.productForm.patchValue({
       id: this.product.id,
       name: this.product.name,
       expirationDate: this.product.expirationDate,
       productionDate: this.product.productionDate,
       state: this.product.state,
       provider:this.product.id_provider
     })
   }
   private resetEditState(){
     this.editMode = false;
     this.product= {}as Product;
   }
   private gettAllProvider():void{
     this.providerService.getAll().subscribe((response )=>{
       this.providers= response;

     })
   }

   onSubmit():void {
     if(this.productForm.invalid)return;

     if(!this.editMode){
       this.dialogRef.close({newProduct:this.product});
     }

   }
  ChapterFile(event:any){
    const  file = event.target.files[0];
    if(file){
      //Añadir a form data
      this.product.image = file;
      console.log("Captura Image")
      console.log(file)

      this.loadImagePreview(file);
    }
  }

  loadImagePreview(file:File):void{
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.result !== null){
        this.imagePreview = reader.result as string | ArrayBuffer;
      }
    };
    console.log("Image Preview:")
    console.log(this.imagePreview)
    reader.readAsDataURL(file)
  }



   onCancel():void{
     this.resetEditState();
     this.dialogRef.close();
   }

  ngOnInit(): void {
     this.gettAllProvider();

  }
}
