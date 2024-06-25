import {Product} from "./product.entity";
import {File} from "./file.entity";

export interface Inventory {
  id: number
  products: Product[]
  files: File[]
  idProfile: number
}
