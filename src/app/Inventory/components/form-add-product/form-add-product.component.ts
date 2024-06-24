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
  newProduct:Product;
  providers: Provider[];
  editMode: boolean = false;
  imagePreview: string | ArrayBuffer = '';

  productForm: FormGroup;
  formData:FormData;

   constructor(private formBuilder: FormBuilder,
               private providerService: ProviderService,
               public dialogRef: MatDialogRef<FormAddProductComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any)  {

     this.product = data.product;
     this.formData = new FormData();
     this.editMode=data.mode;


      this.newProduct = {} as Product;
      this.providers = [];

     this.productForm = this.formBuilder.group({
       id: [{value: '', disabled: true}, Validators.required],
       name: ['', Validators.required],
       expirationDate: ['', Validators.required],
       productionDate: ['', Validators.required],
       state: ['', Validators.required],

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
       this.newProduct.name =this.productForm.controls['name'].value;
       this.newProduct.productionDate =this.TransDate(this.productForm.controls['productionDate'].value).toISOString();

       this.newProduct.expirationDate =this.TransDate(this.productForm.controls['expirationDate'].value).toISOString();

       console.log(this.newProduct)


       this.formData.append('name', this.newProduct.name);
       this.formData.append('expirationDate', this.newProduct.expirationDate);
       this.formData.append('productionDate', this.newProduct.productionDate);

       this.dialogRef.close({newProduct:this.formData});
     }else{

       this.dialogRef.close({newProduct:this.product})
     }

   }
   TransDate(date:string){
     return new Date(date);
}

  ChapterFile(event:any){
    const  file = event.target.files[0];
    if(file){
      //Añadir a form data
      if(!this.editMode){
        this.newProduct.file =file;
        this.formData.append('file', this.newProduct.file);
      }else {
        this.product.file = file;
      }

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
