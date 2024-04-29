import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService} from "../../services/products.service"; // Replace with your service path
import { Product} from "../../model/product.entity"; // Import Product interface or class
import { ProductTableComponent} from "../../components/product-table/product-table.component"; // Import ProductTableComponent
import { CustomSidenavComponent} from "../../../../Public/components/custom-sidenav/custom-sidenav.component"; // Replace with your component path

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {
  inventoryData: Product[] = []; // Array to store product data

  @ViewChild('customSidenav') customSidenavRef: CustomSidenavComponent | undefined; // Reference to CustomSidenavComponent
  @ViewChild('productTableComponent') productTableComponentRef: ProductTableComponent | undefined; // Reference to ProductTableComponent

  constructor(private productService: ProductsService) {} // Inject product service

  ngOnInit(): void {
    this.fetchInventoryData(); // Fetch product data on initialization

    if (this.productTableComponentRef) {
      this.productTableComponentRef.selectedProduct.subscribe((selectedProduct) => {
        console.log('Product selected:', selectedProduct); // Handle selected product
      });
    }
  }

  fetchInventoryData(): void {
    this.productService.getProducts() // Call service method to get products
      .subscribe((products: Product[]) => {
          this.inventoryData = products; // Update component data
          console.log('Products fetched:', products);
        },
          (error: any) => {
          console.error('Failed to fetch products:', error); // Handle errors
        });
  }

  onProductSelected(product: Product): void {
    console.log('Product selected:', product); // Log the selected product
  }

  openAddProductModal(): void {
    console.log('Open add product modal'); // Placeholder for modal opening logic
  }
}
