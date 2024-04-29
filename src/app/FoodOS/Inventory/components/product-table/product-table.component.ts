import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsService} from "../../services/products.service"; // Import ProductService
import {Product} from "../../model/product.entity"; // Import Product interface
import {MatTableDataSource} from '@angular/material/table'; // Import MatTableDataSource
import {MatSnackBar} from '@angular/material/snack-bar'; // Import MatSnackBar for notifications
import {Router} from '@angular/router'; // Import Router for navigation


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input() products: Product[] = []; // Receive product data from parent component
  @Output() selectedProduct = new EventEmitter<Product>();
  @Output() addProduct = new EventEmitter<Product>();
  displayedColumns: string[] = ['id', 'name', 'stock', 'manufacturingDate', 'dueDate', 'provider', 'label', 'state', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  newProduct: Product = {} as Product; // Initialize empty product for adding

  constructor(
    private productService: ProductsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource.data = this.products; // Set initial product data
  }

  // Method to filter products based on search term
  filterProducts(searchTerm: string): void {
    if (!searchTerm) {
      this.dataSource.data = this.products; // Reset to all products if no search term
      return;
    }

    this.dataSource.data = this.products.filter(product => {
      const name = product.name.toLowerCase();
      return name.includes(searchTerm.toLowerCase());
    });
  }

  // Method to handle product selection
  onProductSelected(product: Product): void {
    this.selectedProduct.emit(product); // Emit event with selected product
  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['products', product.id])
      .then(() => {
        console.log('Navigation successful!'); // Example action
      })
      .catch(error => {
        console.error('Navigation error:', error);
      });
  }

  // Method to navigate to product edit page
  editProduct(product: Product): void {
    this.router.navigate(['products', product.id, 'edit'])
      .then(() => {
        // Handle successful navigation (e.g., show success message)
      })
      .catch(error => {
        // Handle navigation error (e.g., display error message)
        console.error('Navigation error:', error);
      });
  }

  onAddProduct(newProduct: Product): void {
    this.addProduct.emit(newProduct); // Emit the addProduct event with the new product data
  }

  // Helper method to display error messages
  showErrorMessage(message: string, error?: any): void {
    console.error(message, error);
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['mat-snackbar-error']
    });
  }
}
