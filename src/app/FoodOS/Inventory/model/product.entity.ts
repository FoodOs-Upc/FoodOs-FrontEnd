import {Provider} from "./provider.entity";

export class Product {
  id: number;
  name: string;
  stock: number;
  manufacturingDate: Date;
  dueDate: Date;
  provider: Provider;
  label: string;
  state: ProductState;

  constructor() {
    this.id = 0;
    this.name = "";
    this.stock= 0;
    this.manufacturingDate = new Date();
    this.dueDate = new Date();
    this.provider = new Provider();
    this.label = "";
    this.state = this.getState();
  }

  isExpired(): boolean {
    return this.dueDate < new Date();
  }

  getState(): ProductState {
    if (this.isExpired()) {
      return ProductState.EXPIRED;
    } else{
      const lowStockThreshold = 5;
      if (this.stock <= lowStockThreshold) {
        return ProductState.LOW_STOCK;
      } else {
        return ProductState.AVAILABLE;
      }
    }
  }
}

// Enum para el estado del producto
enum ProductState {
  AVAILABLE = 'available',
  EXPIRED = 'expired',
  LOW_STOCK = 'low_stock'
}
