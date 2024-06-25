import {AfterViewInit, Component, input, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../model/product.entity";
import {InventoryService} from "../../service/inventory.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {FormAddProductComponent} from "../../components/form-add-product/form-add-product.component";
import {Inventory} from "../../model/inventory.entity";
import {TokenStorageService} from "../../../Auth/service/tokenStorageService.service";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, AfterViewInit{

  inventory:Inventory;

  productData:Product;
  dataSource:MatTableDataSource<Product>;
  displayedColumns:string[]=["id","image","name","expirationDate","productionDate","state","provider","options"];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;

  isEditMode: boolean;


  constructor(private dialog:MatDialog,
              private inventoryService:InventoryService,
              private tokenStorageService:TokenStorageService,
              private productService:ProductService) {
    this.productData ={} as Product;
    this.dataSource= new MatTableDataSource<Product>([]);
    this.isEditMode =false;
    this.inventory={} as Inventory;
  }

  private resetEditState() {
    this.isEditMode = false;
    this.productData ={} as Product;
  }


  private getAllProducts():void{
    this.inventoryService.getById(Number(this.tokenStorageService.getUser())).subscribe((response  )=>{
        this.dataSource.data = response.products;
        this.inventory.id = response.id;

      });
    console.log(this.tokenStorageService.getToken())

  }
  /*Funcion Añadir un Producto*/
  onAddProduct():void{

    this.isEditMode= false;

    const dialog= this.dialog.open(FormAddProductComponent,{
      data:{product: this.productData,mode: this.isEditMode}
    });
    dialog.afterClosed().subscribe(result =>{
      console.log("El form data para agregar")
      console.log(result.newProduct);

      this.inventoryService.addProduct(result.newProduct,this.inventory.id).subscribe(response =>{
      })
    });

    this.resetEditState();


  }
  /*Funcion Editar un Producto*/
  onEditProduct(element:Product){
    this.productData = element;

    this.isEditMode= true;

    const dialog= this.dialog.open(FormAddProductComponent,{
      data:{product: this.productData,mode: this.isEditMode}
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result.newProduct);

      this.inventory.products.push(result.newProduct)

      this.inventoryService.update(this.inventory.id,this.inventory).subscribe(response=>{

      })

    });

    this.resetEditState();
  }

  onDelete(idProduct:number){
      this.productService.delete(idProduct).subscribe(response=>{

      })
    window.location.reload();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
